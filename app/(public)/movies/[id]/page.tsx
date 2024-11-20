// app/movies/[id]/page.tsx
import Comment from "@/components/Comment";
import { apiConfig } from "@/lib/apiUrlConfig";
import axios from "axios";
import Image from "next/image";

async function fetchMovie(id: string) {
  const res = await axios.get(`${apiConfig.baseURL}/api/movies/details/${id}`);
  if (res.status == 200) {
    return res.data.data;
  } else return [];
}
async function fetchComments(id: string) {
  const res = await axios.get(`${apiConfig.baseURL}/api/movies/comments/${id}`);
  if (res.status == 200) {
    console.log(res.data.data[0].comments);
    return res.data.data[0].comments;
  } else return [];
}

interface MovieProps {
  params: Promise<{ id: string }>;
}

export default async function MoviePage({ params }: MovieProps) {
  const id = (await params).id;
  const movie = await fetchMovie(id);
  const comments = await fetchComments(id);

  return (
    <>
      <div className=" bg-white text-black flex flex-row justify-evenly items-start gap-4 w-full h-auto">
        <div className="flex flex-row justify-center items-center w-1/2 h-full">
          {movie.poster && movie.poster !== "" ? (
            <Image
              src={movie.poster}
              alt="Movie Poster"
              width={300}
              height={400}
              priority
            />
          ) : (
            <div className="w-[300px] h-[400px] bg-gray-300 text-xl rounded-xl  flex justify-center items-center">
              Image Not Found
            </div>
          )}
        </div>
        <div className="flex flex-col w-1/2 h-full items-start justify-start px-3 py-4">
          <h1 className="text-4xl"> {movie.title}</h1>
          <p> Movie Descriptuion : {movie.fullplot}</p>
          <p>
            Cast :{" "}
            {movie.cast.map((c: string, i: number) => (
              <span key={i}>{c}, </span>
            ))}
          </p>
          <p>
            Released On :{" "}
            {movie.released && new Date(movie.released).toLocaleString()}
          </p>
          <div className="flex flex-col justify-start items-start w-full">
            <h1 className="w-full text-center font-semibold text-lg">
              Reviews
            </h1>
            {comments.map(
              (
                comment: { name: string; text: string; date: string },
                i: number
              ) => (
                <div
                  key={i}
                  className="flex flex-col justify-start items-start font-medium text-sm"
                >
                  <span>{comment.name}</span>
                  <span>{comment.text}</span>
                  <span className="text-xs">
                    {comment.date && new Date(comment.date).toLocaleString()}
                  </span>
                </div>
              )
            )}
          </div>

          <div className="flex flex-col justify-start items-center w-full">
            <h1 className="w-full text-center font-semibold text-lg">
              Add Your Review
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center w-4/12 mx-auto py-20 px-16 mt-3 bg-gray-200 rounded-2xl">
        <Comment id={id} />
      </div>
    </>
  );
}
