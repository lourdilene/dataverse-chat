import { communicateWithOpenAI } from "../lib/openAIApi.js";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();
jest.mock("../lib/apiKey.js", () => ({
  getApiKey: jest.fn(() => null),
}));
describe("missingAPIKey", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test("communicateWithOpenAI missing API key", async () => {
    const messages = [
      {
        role: "system",
        content: "Hello, how are you?",
      },
    ];

    await expect(communicateWithOpenAI(messages)).rejects.toThrowError(
      "Chave da API não especificada."
    );
  });
});
