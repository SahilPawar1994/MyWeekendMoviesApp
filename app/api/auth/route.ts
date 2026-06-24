import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function GET() {
  console.log("GET /api/test called");
  try {
    const accessToken = (await cookies()).get("access_token");
    const refreshToken = (await cookies()).get("refresh_token");

    console.log("accessToken => ", accessToken);
    console.log("refreshToken => ", refreshToken)

    if (!accessToken && !refreshToken) {
      return NextResponse.json(
        {
          success: false,
        },
        {
          status: 400,
          statusText: "User Not Authenticated",
        }
      );
    }

    return NextResponse.json({
      success: true,
    },
    {
      status: 200,
      statusText: "User Authenticated",
    })
  
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
        statusText: "Internal Server Error!!!",
      }
    );
  }
}
