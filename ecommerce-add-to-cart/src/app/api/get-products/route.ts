import { NextRequest, NextResponse } from "next/server";
import Products from "../../../../data/data.json";

export async function GET() {
    return Response.json(Products);
}