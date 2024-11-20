
import { NextResponse } from "next/server";

export async function GET( ) {
  return NextResponse.json({
    message: "Hello from Next.js API route! of get get get ",
    status: 200,
    success: true,
    data: {
      hello: "Hello",
    },
  });
}

export const POST = async (req: Request) => {
  const token = "hasdfjkhasdjklfhksldahfjkdsahfjkdhjk";
  const body = await req.json();
  const headers = req.headers;
  const authorization = headers.get("authorization");
  
  console.log(body, authorization);
  if (!authorization) {
    return NextResponse.json({
      status: 401,
      message: "Please provide auth",
    });
  }
  if (authorization.split(" ")[1] === token) {
    console.log("Auth checked ");
  }
  if (authorization[1])
    return NextResponse.json({
      message: "Hello from Next.js API route of  POST !",
      status: 200,
      success: true,
      data: body,
    });
};
