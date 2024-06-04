import countGames from "@/controllers/games/countGames";
import { NextResponse } from "next/server";

export async function GET(req) {
  const query = req.nextUrl.searchParams.get('query');

  try {
    const gamesQuantity = await countGames(query);

    return NextResponse.json({ gamesQuantity }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ err: err.message }, { status: 500 });
  }
}