import { GoogleGenAI } from "@google/genai";
const ApiKey = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: ApiKey });
export const GenerateInformation = async (
  topic: string = "acne and eczema"
) => {
  const prompt = `Imagine yourself as a Medical Teacher and Help me assist in Learning different skin diseases. I want you to give me a details of a disease which I will mention in the topic. generate response in the below format.
    {
    Disease Name: [Name of Possible Disease according to the symptoms],
    Symptoms: [Symptoms of the Disease]
    precautions : [3 - 5 step precautions],
    food suggestion : [2 - 3 food suggestions]

    disease = ${topic}


    just give output in given format

    {
        diseaseName : string,
        Symptoms: string,
        precautions : [string],
        food suggestions : [string]
    }

    no extra information apart from specified output format

    `;
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });

  return response;
};
