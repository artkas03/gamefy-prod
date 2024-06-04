
import createGames from "@/src/controllers/games/createGames";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { data } = await req.json();

  try {
    const response = await createGames(data);

    return NextResponse.json({ message: response }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}