import { communicateWithOpenAI } from "../lib/openAIApi.js";
import fetchMock from "jest-fetch-mock";

jest.mock("../lib/apiKey.js", () => ({
  getApiKey: jest.fn(() => "fakeApiKey"),
}));

describe("communicateWithOpenAI", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test("communicateWithOpenAI", async () => {
    const messages = [
      {
        role: "system",
        content: "Hello, how are you?",
      },
    ];

    const fakeResponse = {
      ok: true,
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
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer fakeApiKey",
        },
        body: JSON.stringify({
          messages: messages,
          model: "gpt-3.5-turbo",
        }),
      }
    );
  });
});
