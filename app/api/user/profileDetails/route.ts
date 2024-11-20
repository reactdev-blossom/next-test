import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const headers = req.headers;
    console.log("headerh", headers);
    if (!headers) {
      return NextResponse.json(
        {
          success: false,
          message: "You are not authorised to access this page, please login",
          status: 401,
        },
        { status: 401 }
      );
    }
    const authorization = headers.get("authorization");
    if (!authorization) {
      return NextResponse.json(
        {
          success: false,
          message: "You are not authorised to access this page, please login",
          status: 401,
        },
        { status: 401 }
      );
    }
    const token = authorization.split(" ")[1];
    console.log(token);
    if (token === "tokentokentokenetojkasfdj") {
      return NextResponse.json(
        {
          success: true,
          message: "User Profile data retrieved successfully",
          status: 200,
          data: {
            firstName: "Rahul",
            lastName: "Mehta",
          },
        },
        { status: 200 }
      );
    } else
      return NextResponse.json(
        {
          success: false,
          message: "You are not authorised to access this page, please login",
          status: 401,
        },
        { status: 401 }
      );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        success: false,
        message: "There was some internal server error",
        status: 500,
      },
      { status: 500 }
    );
  }
}
