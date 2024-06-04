
import getGenres from "@/src/controllers/gameGenres/getGenres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const genresData = await getGenres();
    return NextResponse.json({ genres: genresData }, { status: 200 });
  } catch (err) {
    return NextResponse.json({}, { status: 500 });
  }
}