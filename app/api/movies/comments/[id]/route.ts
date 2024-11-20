import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbconnection";
import Movies from "@/models/movies";
import { ObjectId } from "mongodb";
import Comments from "@/models/comments";

export async function GET(
  req: Request,
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  }
) {
  dbConnect();
  try {
    const { id } = await params;
    console.log(id);
    const data = await Movies.aggregate([
      { $match: { _id: new ObjectId(id) } },
      {
        $lookup: {
          from: "comments",
          localField: "_id",
          foreignField: "movie_id",
          as: "comments",
        },
      },
      {
        $project: {
          title: 1,
          comments: 1,
        },
      },
    ]);
    return NextResponse.json({
      message: "Request Complete with success using next js api response  ",
      status: 200,
      success: true,
      data: data,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Request Complete with eror using next js api response  ",
      status: 500,
      success: false,
    });
  }
}

export async function POST(
  req: Request,
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  }
) {
  console.log("Received and intercepted a request ie post req");
  dbConnect();
  try {
    const { id } = await params;
    const body = await req.json();
    console.log(body);
    const data = await Comments.create({
      email: body.email,
      text: body.comment,
      name: body.name,
      movie_id: new ObjectId(id),
    });

    return NextResponse.json({
      message: "Request Complete with success using next js api response  ",
      status: 200,
      success: true,
      data: data,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Request Complete with eror using next js api response  ",
      status: 500,
      success: false,
    });
  }
}
