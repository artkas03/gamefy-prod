import getGamesForCatalogPage from "@/src/controllers/games/getGamesForCatalogPage";
import { NextResponse } from "next/server";

export async function GET(req) { 
  const page = req.nextUrl.searchParams.get('page');
  const query = req.nextUrl.searchParams.get('query');
  const activeGenre = req.nextUrl.searchParams.get('activeGenre');
  const userEmail = req.nextUrl.searchParams.get('userEmail');

  const params = {
    pagination: page || 1,
    query: query || '',
    activeGenre: activeGenre === 'All' ? '' : activeGenre,
    userEmail
  }

  try {
    const gamesData = await getGamesForCatalogPage(params);

    return NextResponse.json({ games: gamesData }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ err: err.message }, { status: 500 });
  }
}