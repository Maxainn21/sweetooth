import { MongoClient, MongoServerError, ServerApiVersion } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URL || "", {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function POST(
  request: Request,
  { params }: { params: { recipe: string } }
) {
  try {
    const recipe = params.recipe;

    await client.connect();

    const data = await client
      .db("sweetooth-lab")
      .collection("ratings")
      .find({ recipe: recipe }, { sort: { time: -1 }, limit: 10 })
      .toArray();

    return Response.json(data);
  } catch (error) {
    if (error instanceof MongoServerError) {
      console.log(`Error worth logging: ${error}`);
    }
    throw error;
  }
}
