
import createComment from "@/src/controllers/comments/createComment";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();

  try {
    const response = await createComment(data);

    return NextResponse.json({ response }, { status: 200 });
  } catch (err) {
    return NextResponse.json({}, { staus: 500 });
  }
}