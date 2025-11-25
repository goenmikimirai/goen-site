// app/api/goen-image/route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return new NextResponse("Missing id", { status: 400 });
  }

  // Google Drive 側の画像URL
  const driveUrl =
    "https://drive.usercontent.google.com/download?id=" +
    encodeURIComponent(id) +
    "&export=view";

  const res = await fetch(driveUrl);

  if (!res.ok || !res.body) {
    return new NextResponse("Failed to fetch image", { status: 502 });
  }

  const contentType = res.headers.get("content-type") ?? "image/jpeg";

  return new NextResponse(res.body, {
    status: 200,
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=86400",
    },
  });
}
