import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    // Validate the file
    if (!file) {
      return NextResponse.json(
        { error: "No file provided in the request" },
        { status: 400 }
      );
    }

    const mlFormData = new FormData();
    mlFormData.append("file", file);

    // Send the image to your ML backend
    const mlResponse = await fetch(
      "https://api-model-skinal.onrender.com/predict",
      {
        method: "POST",
        body: mlFormData,
      }
    );

    // Check if the ML backend responded successfully
    if (!mlResponse.ok) {
      const errorData = await mlResponse.json().catch(() => ({}));
      return NextResponse.json(
        { error: "ML backend request failed", details: errorData },
        { status: mlResponse.status }
      );
    }

    const mlResult = await mlResponse.json();

    return NextResponse.json(
      {
        message: "Image processed successfully",
        result: mlResult,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
