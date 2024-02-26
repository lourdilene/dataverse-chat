import { getApiKey } from "../lib/apiKey.js";

const OPENAI_API_KEY = getApiKey();

export const communicateWithOpenAI = (messages) => {
  return new Promise((resolve, reject) => {
    if (!OPENAI_API_KEY) {
      const error = new Error("Chave da API não especificada.");
      return reject(error);
    }

    const url = "https://api.openai.com/v1/chat/completions";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    };
    const body = JSON.stringify({
      messages: messages,
      model: "gpt-3.5-turbo",
    });

    fetch(url, {
      method: "POST",
      headers: headers,
      body: body,
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 401) {
            throw new Error("Erro de autenticação. Verifique sua chave API.");
          } else {
            throw new Error("Erro ao fazer a solicitação.");
          }
        }
        return response.json();
      })
      .then((data) => {
        resolve(data.choices[0].message.content);
      })
      .catch((error) => {
        console.error("Erro ao fazer a solicitação:", error);
        reject(error);
      });
  });
};
