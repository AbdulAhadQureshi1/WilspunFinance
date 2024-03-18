import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: Request | NextRequest,
) {
    return NextResponse.json("ok")
}