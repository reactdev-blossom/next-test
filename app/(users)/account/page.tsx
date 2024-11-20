// app/login/page.js
"use client"; // Enable client-side rendering for handling form submissions

import axios from "axios";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation (can be enhanced)
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      const response = await axios.post("/api/user/login", {
        email,
        password,
      });

      if (response.status !== 200) {
        throw new Error("Login failed! Please check your credentials.");
      }

      const data = await response.data.data;
      // Handle successful login (e.g., store token, redirect user)
      console.log("Login successful:", data);
      // Redirect or perform other actions as needed
    } catch (err: unknown) {
      console.error(err);
      setError("Unknown internal server error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Account Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="flex flex-row gap-5 mt-4">
          <Link href={"/"} className="text-blue-500 hover:underline">
            Back To Home
          </Link>
          <Link href={"/register"} className="text-blue-500 hover:underline">
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
}
