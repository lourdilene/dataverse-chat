import { communicateWithOpenAI } from "../lib/openAIApi.js";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

jest.mock("../lib/apiKey.js", () => ({
  getApiKey: jest.fn(() => "fakeApiKey"),
}));

describe("communicateWithOpenAI", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test("communicateWithOpenAI success", async () => {
    const messages = [
      {
        role: "system",
        content: "Hello, how are you?",
      },
    ];

    const fakeResponse = {
      choices: [
        {
          message: {
            content: "Example response",
          },
        },
      ],
    };

    fetchMock.mockResponseOnce(JSON.stringify(fakeResponse));

    const response = await communicateWithOpenAI(messages);

    expect(response).toBe("Example response");
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.openai.com/v1/chat/completions",
      expect.objectContaining({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer fakeApiKey",
        },
        body: JSON.stringify({
          messages: messages.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
          model: "gpt-3.5-turbo",
        }),
      })
    );
  });

  test("communicateWithOpenAI error handling", async () => {
    const messages = [
      {
        role: "system",
        content: "Hello, how are you?",
      },
    ];

    const fakeErrorResponse = {
      status: 500,
      statusText: "Internal Server Error",
    };

    fetchMock.mockResponseOnce(JSON.stringify(fakeErrorResponse), {
      status: 500,
    });

    await expect(communicateWithOpenAI(messages)).rejects.toThrowError(
      "Erro ao fazer a solicitação."
    );

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.openai.com/v1/chat/completions",
      expect.objectContaining({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer fakeApiKey",
        },
        body: JSON.stringify({
          messages: messages.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
          model: "gpt-3.5-turbo",
        }),
      })
    );
  });
});
