import addGameToCollection from "@/controllers/userCollections/addGameToCollection";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();

  try {
    await addGameToCollection(data);

    return NextResponse.json({ newCollection: data.newCollection }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}