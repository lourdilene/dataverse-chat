import { getApiKey } from "../lib/apiKey.js";

const OPENAI_API_KEY = getApiKey();

export const communicateWithOpenAI = async (message) => {
  const url = "https://api.openai.com/v1/chat/completions";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${OPENAI_API_KEY}`,
  };
  const body = JSON.stringify({
    messages: message,
    model: "gpt-3.5-turbo",
  });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: body,
    });

    if (!response.ok) {
      throw new Error("Erro ao fazer a solicitação.");
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Erro ao fazer a solicitação: ", error);
    throw error; // Lança o erro novamente para ser tratado onde a função for chamada
  }
};
