import likeComment from "@/controllers/comments/likeComment";
import { NextResponse } from "next/server";

export async function PATCH(req) {
  const { commentId, userEmail } = await req.json();

  try {
    const response = await likeComment(commentId, userEmail);

    return NextResponse.json({ response }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ err }, { staus: 500 });
  }
}