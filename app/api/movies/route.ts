import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../lib/dbconnection";

import Movies from "../../../models/movies";


export async function GET(req: NextRequest) {
  dbConnect();
  try {
    if (req.url) {
      console.log(req);
      const { searchParams } = new URL(req.url); // Access search parameters from the URL
      const page = searchParams.get("page");
      const limit = searchParams.get("limit");
      console.log(page);
      const skip = Number(page) * Number(limit) - Number(limit);
      const data = await Movies.find({})
        .skip(Number(skip))
        .limit(Number(limit));
      const totalPages = Math.ceil((await Movies.countDocuments()) / 10);
      console.log(totalPages);
      return NextResponse.json({
        message: "Movies Request response fetched from the server of next js  ",
        status: 200,
        success: true,
        data: data,
        totalPages,
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Movies Request response fetched from the server of next js  ",
      status: 500,
      success: false,
    });
  }
}
