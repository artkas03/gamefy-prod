import createUser from "@/controllers/users/createUser";
import getUser from "@/controllers/users/getUser";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { username, email, password } = await req.json();

    const userData = {
      username,
      email,
      password
    }

    const user = await getUser(email);

    if (user) {
      return NextResponse.json({ message: "User with such email is already exist!" }, { status: 403 })
    }

    await createUser(userData);

    return NextResponse.json({ message: "User has been successfully registrated!" }, { status: 201 })
  } catch(err) {
    return NextResponse.json({ message: err }, { status: 500 })
  }
}