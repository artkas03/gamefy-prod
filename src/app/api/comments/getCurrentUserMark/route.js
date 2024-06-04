import getUserMark from "@/controllers/comments/getUserMark";
import { NextResponse } from "next/server";

export async function GET(req) {
  const email = req.nextUrl.searchParams.get('userEmail');
  const gameSlug = req.nextUrl.searchParams.get('gameSlug');

  const dataForSearch = {
    email,
    gameSlug
  }

  try {
    const userMark = await getUserMark(dataForSearch);

    return NextResponse.json({ userMark }, { status: 200 });
  } catch (err) {
    return NextResponse.json({}, { staus: 500 });
  }
}