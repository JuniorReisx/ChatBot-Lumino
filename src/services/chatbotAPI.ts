import { GoogleGenerativeAI } from "@google/generative-ai";

export async function promptGemini(text: string): Promise<string> {
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

  if (!apiKey) {
    throw new Error(
      "VITE_REACT_APP_API_KEY is not defined. Check your .env file."
    );
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const prompt = `Responda como se fosse um assistente virtual. Seja claro e objetivo: ${text}`;
    const result = await model.generateContent(prompt);

    const output = result?.response?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!output) {
      throw new Error("Resposta inválida da IA.");
    }

    return output;
  } catch (error) {
    const err = error as Error;
    console.error("Erro na geração de conteúdo:", err.message);
    throw new Error("Erro ao gerar resposta da IA.");
  }
}
