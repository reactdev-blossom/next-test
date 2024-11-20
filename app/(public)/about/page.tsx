"use client";
// import axios from "axios";

export default function page() {
  return (
    <section className="w-full h-auto overflow-auto">
      {/* <ApiButton /> */}
      its api button
    </section>
  );
}

// const data = {
//   hello: "Hello this is the body attached ",
//   by: "I am by bye ",
// };

// export const ApiButton = () => {
//   const fetchData = async () => {
//     const response = await axios.get("http://localhost:3000/api/basic");
//     console.log(response.data);
//   };

//   const postData = async () => {
//     const response = await axios.post("http://localhost:3000/api/basic", data, {
//       headers: {
//         Authorization: `Bearer hasdfjkhasdjklfhksldahfjkdsahfjkdhjk`,
//       },
//     });
//     console.log(response);
//   };
//   return (
//     <div className=" flex flex-row justify-evenly items-start gap-10 w-full h-fit py-3 px-4">
//       <button
//         onClick={() => fetchData()}
//         className="border border-white hover:border-red-600"
//       >
//         Fetch Api Data Simulation
//       </button>{" "}
//       <button
//         onClick={() => postData()}
//         className="border border-white hover:border-red-600"
//       >
//         Post Api Data Simulation
//       </button>
//     </div>
//   );
// };
