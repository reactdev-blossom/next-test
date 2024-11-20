// pages/movies.js
import axios from "axios";
import Link from "next/link";
import React from "react";
import { search } from "./page";
import PaginationControlled from "@/components/Pagination";
import SearchComponent from "@/components/SearchComponent";

interface Movie {
  _id: string;
  title: string;
  rated: string;
}

const MoviesPage: React.FC<search> = async ({ searchParams }) => {
  const search = await searchParams;
  const limit = Number(search.limit) || 10;
  const page = Number(search.page) || 1;
  const response = await axios.get(
    `http://localhost:3000/api/movies?page=${page}&limit=${limit}`
  );
  const movies: Movie[] = response.data.data;
  const totalPages = response.data.totalPages;
  console.log("total pages", response.data.totalPages);

  return (
    <div className="flex flex-col justify-start items-start w-full ">
      <div className=" w-full text-lg font-medium text-center p-4 py-10 relative flex flex-row justify-evenly items-center">
        <div className=" px-4 w-1/3">
          <SearchComponent />
        </div>
        <p className="w-1/3 uppercase font-bold tracking-wide">
          Available Movies
        </p>
        <div className=" px-4 w-1/3">
          <PaginationControlled page={page} totalPages={totalPages} />
        </div>
      </div>

      {movies.length > 0 ? (
        <div className=" flex flex-col gap-5 px-8 py-3 w-full relative ">
          {movies?.map((movie: Movie) => (
            <div
              className="w-full flex flex-row justify-between items-center"
              key={movie._id}
            >
              <div
                key={movie._id}
                className=" flex flex-row justify-start items-center gap-3"
              >
                <span className="text-black font-bold text-md">
                  {movie.title}
                </span>
                {movie?.rated && (
                  <span className="text-xs font-semibold text-gray-600 ">
                    {`( ${movie.rated})`}
                  </span>
                )}
              </div>
              <Link className="w-fit" href={`/movies/${movie._id}`}>
                View Details
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-row justify-center items-center w-full h-14">
          No Movies Found
        </div>
      )}
    </div>
  );
};

export default MoviesPage;
