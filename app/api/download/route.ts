import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "JoeWardCV.pdf");

    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="JoeWardCV.pdf"',
      },
    });
  } catch (error) {
    console.error("Error downloading file:", error);
    return new NextResponse("Error downloading file", { status: 500 });
  }
}
