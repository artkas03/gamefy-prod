
import getFullGameInfo from "@/controllers/games/getFullGameInfo";
import { NextResponse } from "next/server";

export async function GET(req, route) {
  const { slug } = route.params;

  try {
    const gameData = await getFullGameInfo(slug);

    if (!gameData) {
      return NextResponse.json({ message: "No data has been found!" }, { status: 405 });
    }

    return NextResponse.json({ gameData }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ err: err.message }, { status: 500 });
  }
}