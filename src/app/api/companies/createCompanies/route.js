import createCompanies from "controllers/companies/createCompanies";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { data } = await req.json();
  const preparedCompanies = data.map(({ name }) => ({ name }));

  try {
    const response = await createCompanies(preparedCompanies);

    return NextResponse.json({ response }, { status: 200 });
  } catch (err) {
    return NextResponse.json({}, { staus: 500 });
  }
}