import { MongoClient, MongoServerError, ServerApiVersion } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URL || "", {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

function calculateAverageRating(data: any) {
  if (!data || data.length === 0) {
    return 0;
  }
  let totalRating = 0;
  for (let i = 0; i < data.length; i++) {
    totalRating += Number(data[i].rating);
  }

  const averageRating = totalRating / data.length;
  return averageRating;
}

export async function POST(request: Request) {
  try {
    await client.connect();

    const formData = await request.formData();
    const name = formData.get("name");
    const recipe = formData.get("recipe");
    const rating: any = formData.get("rating");
    const comments = formData.get("comments");
    const time = new Date().getTime();

    const data = await client
      .db("sweetooth-lab")
      .collection("ratings")
      .insertOne({
        name,
        recipe,
        rating: parseInt(rating),
        time,
        comments,
      });

    const ratingData = await client
      .db("sweetooth-lab")
      .collection("ratings")
      .find({ recipe: recipe })
      .toArray();

    await client
      .db("sweetooth-lab")
      .collection("recipes")
      .updateOne(
        { id: recipe },
        {
          $set: {
            "recipes.reviews": {
              rating: calculateAverageRating(ratingData),
              count: ratingData.length,
            },
          },
        }
      );

    return Response.json({
      res: data,
      data: {
        name,
        recipe,
        rating,
        time,
        comments,
      },
      ratingData,
    });
  } catch (error) {
    if (error instanceof MongoServerError) {
      console.log(`Error worth logging: ${error}`);
    }
    throw error;
  }
}
