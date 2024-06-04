
import getGamesById from "@/controllers/games/getGamesById";
import getUserFullData from "@/controllers/users/getUserFullData";
import { NextResponse } from "next/server";

export async function GET(req) {
  // const idsArray = req.nextUrl.searchParams.get('ids');

  const data = Array.from(req.nextUrl.searchParams.entries()).reduce((acc, entry) => ({ ...acc, [entry[0]]: entry[1] }), {});

  try {
    const userData = await getUserFullData(data);

    // return NextResponse.json({ games: gamesData }, { status: 200 });
    return NextResponse.json({ userData }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ err: err.message }, { status: 500 });
  }
}