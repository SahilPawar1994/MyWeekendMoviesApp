import connectToDatabase from "../../../config/DatabaseConnection";

export async function GET(request) {
  console.log("GET /api/test called");
  try {
    await connectToDatabase();

    return new Response(
      JSON.stringify({ success: true, message: "MongoDB connection successful" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error(
      "Error fetching data:",
      error instanceof Error ? error.stack : error
    );
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to fetch data from the database",
        error: error instanceof Error ? error.message : String(error),
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}   