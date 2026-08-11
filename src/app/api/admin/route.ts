import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "src/data");

export async function POST(request: NextRequest) {
  try {
    const { file, data } = await request.json();

    // Security: only allow specific files
    const allowedFiles = ["shop-config.json", "instagram-reels.json", "menu-items.json"];
    if (!allowedFiles.includes(file)) {
      return NextResponse.json({ error: "Invalid file" }, { status: 400 });
    }

    const filePath = path.join(DATA_DIR, file);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}
