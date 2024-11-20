import { NextResponse } from "next/server";
import Users from "@/models/users";
import { match } from "@/lib/middlewares/encryptions/encrypt";
import dbConnect from "@/lib/dbconnection";

interface User {
  firstName?: string | null;
  lastName?: string | undefined | null;
  email: string | null | undefined;
  phone: string;
  gender?: string;
  dob?: string;
  password: string;
}

interface AuthResponse {
  success: boolean;
  status: number;
  message: string;
  data: any;
}

const checkUserExistence = async (email: string): Promise<AuthResponse> => {
  const user = await Users.findOne({ email });
  if (!user) {
    return {
      success: false,
      status: 401,
      message: "Invalid credentials",
      data: null,
    };
  } else
    return {
      success: true,
      status: 200,
      message: "User found",
      data: user,
    };
};

const verifyCredentials = async (
  user: User,
  password: string
): Promise<AuthResponse> => {
  const auth = match({ hash: user.password, plainPass: password });
  if (!auth) {
    return {
      success: false,
      status: 401,
      message: "Invalid credentials",
      data: null,
    };
  }
  return {
    success: true,
    status: 200,
    message: "Credentials verified",
    data: user,
  };
};

export async function POST(req: Request): Promise<NextResponse> {
  try {
    await dbConnect();
    const { email, password }: { email: string; password: string } =
      await req.json();

    const userCheck = await checkUserExistence(email);
    if (!userCheck.success || !userCheck.data) {
      return NextResponse.json(userCheck, { status: userCheck.status });
    }

    const authCheck = await verifyCredentials(userCheck.data, password);
    if (!authCheck.success) {
      return NextResponse.json(authCheck, { status: authCheck.status });
    }

    return NextResponse.json({
      success: true,
      status: 200,
      message: "User login successful.",
      data: userCheck.data,
    });
  } catch (error: unknown) {
    console.error("Error during login process:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error, please try again later.",
        status: 500,
      },
      { status: 500 }
    );
  }
}
