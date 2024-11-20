const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error("API URL is not defined in environment variables");
}

export const apiConfig = {
  baseURL: API_URL,
};
