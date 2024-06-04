
import getGamesForSearch from "@/controllers/games/getGamesForSearch";
import { NextResponse } from "next/server";

export async function GET(req) {
  const query = req.nextUrl.searchParams.get('query');

  try {
    const gamesData = await getGamesForSearch(query);

    return NextResponse.json({ games: gamesData }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ err: err.message }, { status: 500 });
  }
}