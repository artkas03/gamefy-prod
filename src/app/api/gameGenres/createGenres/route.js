
import genresCreate from "@/src/controllers/gameGenres/createGenres";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { data } = await req.json();
  const preparedGenres = data.map(({ genre }) => ({ genre }))

  try {
    const response = await genresCreate(preparedGenres);

    return NextResponse.json({ response }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ err: err.message }, { status: 500 });
  }
}