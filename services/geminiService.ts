import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || ''; 

// Initialize only if key exists to avoid runtime errors in demo
let ai: GoogleGenAI | null = null;
if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
}

export const getCoffeeRecommendation = async (userQuery: string): Promise<string> => {
  if (!ai) {
    return "죄송합니다. 현재 AI 소믈리에 서비스가 점검 중입니다. 잠시 후 다시 시도해주세요. (API Key Missing)";
  }

  try {
    const model = 'gemini-2.5-flash';
    const systemInstruction = `
      당신은 '에코 브루(Eco Brew)'의 전문 커피 소믈리에입니다.
      친절하고 전문적인 톤으로 고객의 질문에 답하세요.
      고객이 커피 취향(산미, 바디감, 향 등)을 말하면 에코 브루의 원두 라인업(에티오피아 예가체프, 과테말라 안티구아, 콜롬비아 수프리모, 인도네시아 만델링) 중에서 추천해주세요.
      답변은 300자 이내로 간결하게 작성해주세요.
      친환경 가치에 대한 질문에도 열정적으로 답해주세요.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: userQuery,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "죄송합니다. 답변을 생성할 수 없습니다.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "죄송합니다. 일시적인 오류가 발생했습니다. 나중에 다시 시도해주세요.";
  }
};