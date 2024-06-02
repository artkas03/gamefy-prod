import { NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json({ data: { datum1: { innerDatum: 'name' } }}, { status: 200 });
}