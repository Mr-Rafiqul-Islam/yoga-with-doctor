import crypto from "node:crypto";

import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_BYTES = 5 * 1024 * 1024;

function signUploadParams(
  params: Record<string, string | number>,
  apiSecret: string
): string {
  const sortedKeys = Object.keys(params).sort();
  const toSign =
    sortedKeys.map((k) => `${k}=${params[k]}`).join("&") + apiSecret;
  return crypto.createHash("sha1").update(toSign).digest("hex");
}

/**
 * Authenticated profile image upload to Cloudinary.
 * Uses CLOUD_API_NAME, CLOUD_API_KEY, CLOUD_API_SECRET from env (server-only).
 */
export async function POST(request: NextRequest) {
  const auth = request.headers.get("authorization");
  if (!auth?.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Authentication required" }, { status: 401 });
  }

  const cloudName = process.env.CLOUD_API_NAME;
  const apiKey = process.env.CLOUD_API_KEY;
  const apiSecret = process.env.CLOUD_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    return NextResponse.json(
      { error: "Cloudinary is not configured on the server" },
      { status: 500 }
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const file = formData.get("file");
  if (!file || !(file instanceof File)) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  if (!file.type.startsWith("image/")) {
    return NextResponse.json(
      { error: "Only image files are allowed" },
      { status: 400 }
    );
  }

  if (file.size > MAX_BYTES) {
    return NextResponse.json(
      { error: "Image must be 5MB or smaller" },
      { status: 400 }
    );
  }

  const timestamp = Math.round(Date.now() / 1000);
  const signParams: Record<string, string | number> = {
    timestamp,
    folder: "ywd/profile-pictures",
  };
  const signature = signUploadParams(signParams, apiSecret);

  const uploadBody = new FormData();
  uploadBody.append("file", file);
  uploadBody.append("api_key", apiKey);
  uploadBody.append("timestamp", String(timestamp));
  uploadBody.append("signature", signature);
  uploadBody.append("folder", String(signParams.folder));

  const cloudRes = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    { method: "POST", body: uploadBody }
  );

  const payload = (await cloudRes.json()) as {
    secure_url?: string;
    public_id?: string;
    error?: { message?: string };
  };

  if (!cloudRes.ok) {
    return NextResponse.json(
      {
        error:
          payload.error?.message ??
          "Upload to Cloudinary failed",
      },
      { status: cloudRes.status >= 400 ? cloudRes.status : 502 }
    );
  }

  if (!payload.secure_url) {
    return NextResponse.json(
      { error: "Upload succeeded but no image URL was returned" },
      { status: 502 }
    );
  }

  return NextResponse.json({
    success: true,
    url: payload.secure_url,
    publicId: payload.public_id,
  });
}
