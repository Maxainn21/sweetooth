import { MongoClient, MongoServerError, ServerApiVersion } from "mongodb";
import { NextRequest } from "next/server";

const client = new MongoClient(process.env.MONGODB_URL || "", {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function POST(request: NextRequest) {
  try {
    await client.connect();
    const searchParams = request.nextUrl.searchParams;

    const search = searchParams.get("search");
    const category = searchParams.get("categories");

    const data = await client
      .db("sweetooth-lab")
      .collection("recipes")
      .find(
        search === "null"
          ? category === "null"
            ? {}
            : { category: category }
          : { title: { $regex: search, $options: "i" } }
      )
      .toArray();

    return Response.json(data);
  } catch (error) {
    if (error instanceof MongoServerError) {
      console.log(`Error worth logging: ${error}`); // special case for some reason
    }
    throw error;
  }
}
