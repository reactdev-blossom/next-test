"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef } from "react";

interface Data {
  [k: string]: FormDataEntryValue;
}
export async function PostData(data: Data, id: string) {
  const token = "asdfasdfdasfhasdljkfhjkdashfjklhasdjklfhklasdjhjk";
  const response = await axios.post(
    `http://localhost:3000/api/movies/comments/${id}`,
    data,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  console.log(response);
  if (response.status === 200) {
    alert("Posted a comment");
    return true;
  } else {
    alert("Error posting comment");
    return false;
  }
}

export default function Comment({ id }: { id: string }) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEntries = new FormData(e.currentTarget); // `currentTarget` for better type inference
    const data = Object.fromEntries(formEntries.entries());
    console.log(data);
    await PostData(data, id);
    if (formRef.current) {
      formRef.current.reset();
      router.push(`/movies/${id}`);
    }
  };

  return (
    <>
      <form
        ref={formRef}
        className="flex flex-col justify-start items-start gap-5"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label
          htmlFor="comment"
          className="flex flex-row justify-between items-start gap-4 border border-black rounded-xl px-4 pt-6 pb-2    bg-white relative w-full"
        >
          <span className="absolute border border-b-transparent border-black -top-2 w-full px-3 py-0 rounded-t-xl left-0 bg-white ">
            Comment
          </span>
          <textarea
            className="resize-none w-full h-42"
            name="comment"
            id="comment"
          />
        </label>
        <label
          htmlFor="name"
          className="flex flex-row justify-between items-start gap-4  border border-black rounded-xl px-4 pt-6 pb-2    bg-white relative w-full"
        >
          <span className="absolute border border-b-transparent border-black -top-2 w-full px-3 py-0 rounded-t-xl left-0 bg-white ">
            Name
          </span>
          <input type="text" name="name" id="name" />
        </label>
        <label
          htmlFor="email"
          className="flex flex-row justify-between items-start gap-4  border border-black rounded-xl px-4 pt-6 pb-2    bg-white relative w-full"
        >
          <span className="absolute border border-b-transparent border-black -top-2 w-full px-3 py-0 rounded-t-xl left-0 bg-white ">
            Email
          </span>
          <input type="email" name="email" id="email" />
        </label>
        <button type="submit" className=" w-full bg-green-300 ">
          Post Review
        </button>
      </form>
    </>
  );
}
