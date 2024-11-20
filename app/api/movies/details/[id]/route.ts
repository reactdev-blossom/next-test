import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbconnection";

import Movies from "@/models/movies";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  dbConnect();
  try {
    const { id } = await params;
    const data = await Movies.findOne({ _id: id });
    return NextResponse.json({
      message: "Movies Request response fetched from the server of next js  ",
      status: 200,
      success: true,
      data: data,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Movies Request response fetched from the server of next js  ",
      status: 500,
      success: false,
    });
  }
}
