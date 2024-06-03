
import getGamesById from "@/controllers/games/getGamesById";
import { NextResponse } from "next/server";

export async function GET(req) {
  const idsArray = req.nextUrl.searchParams.get('ids').split(',').map((stringNumber) => Number(stringNumber));

  try {
    const gamesData = await getGamesById(idsArray);

    return NextResponse.json({ games: gamesData }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ err: err.message }, { status: 500 });
  }
}