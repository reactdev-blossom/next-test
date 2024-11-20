import jwt, { JwtPayload } from "jsonwebtoken";

export const createToken = async ({
  secret,
  payload,
  expiresIn,
}: {
  secret: string;
  payload: {
    [key: string]: string;
  };
  expiresIn: string;
}): Promise<string> => {
  try {
    const token = await jwt.sign(payload, secret, {
      expiresIn,
    });
    return token;
  } catch (error) {
    console.error("Error creating token:", error);
    throw new Error("Failed to create token"); // Custom error message
  }
};

export const verify = async ({
  token,
  secret,
}: {
  token: string;
  secret: string;
}): Promise<string | JwtPayload> => {
  try {
    const verified = await jwt.verify(token, secret);
    return verified;
  } catch (error) {
    console.error("Token verification failed:", error);
    throw new Error("Invalid token"); // Custom error message
  }
};
