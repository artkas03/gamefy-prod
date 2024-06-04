import deleteGameFromCollection from "@/controllers/userCollections/deleteGameFromCollection";
import { NextResponse } from "next/server";

export async function PATCH(req) {
  const data = await req.json();

  try {
    await deleteGameFromCollection(data);

    return NextResponse.json({ message: 'Game has been successfully deleted!' }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}