import { GenerateInformation } from "@/utils/gemini";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    // const file = formData.get("file");
    const disease = formData.get("disease") || "skin cancer";

    const generatedResponse = await GenerateInformation(`${disease}`);
    const generatedText =
      generatedResponse?.candidates?.[0]?.content?.parts?.[0]?.text;

    return NextResponse.json(
      { message: "Data extracted successfully", predictions: generatedText },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Error with the server: ${error}` },
      { status: 500 }
    );
  }
}
