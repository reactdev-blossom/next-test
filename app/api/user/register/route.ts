import { createToken } from "@/lib/middlewares/auth/authentications";
import { encrypt } from "@/lib/middlewares/encryptions/encrypt";
import Users from "@/models/users";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log(body);
    const hash = await encrypt({ plainPass: body.password });
    const newUser = await Users.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone,
      gender: body.gender,
      dob: body.dob,
      password: hash,
    });
    const acc_sec = await process.env.NEXT_JWT_ACCESS_SECRET;
    const ref_sec = await process.env.NEXT_JWT_REFRESH_SECRET;

    if (
      newUser.firstName &&
      newUser.lastName &&
      newUser.email &&
      newUser._id &&
      acc_sec &&
      ref_sec
    ) {
      const payload = {
        fname: newUser.firstName,
        lname: newUser.lastName,
        email: newUser.email,
        user_id: String(newUser._id),
      };
      if (payload) {
        const access_token = createToken({
          payload: payload,
          secret: acc_sec,
          expiresIn: "1h",
        });
        const refresh_token = createToken({
          payload: payload,
          secret: ref_sec,
          expiresIn: "3000h",
        });
        return NextResponse.json({
          success: true,
          status: 200,
          message: "User Registration was successful !",
          data: body,
          access_token,
          refresh_token,
        });
      }
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      status: 500,
      message: "There was some error while registering the user",
      error: error,
    });
  }
}
