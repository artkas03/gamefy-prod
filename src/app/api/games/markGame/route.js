import markGame from "@/controllers/games/markGame";
import { NextResponse } from "next/server";

export async function PATCH(req) {
  const data = await req.json();

  try {
    const response = await markGame(data);

    return NextResponse.json({ response }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}