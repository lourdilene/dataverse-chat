import { communicateWithOpenAI } from "../lib/openAIApi.js";

const message = [
  {
    role: "system",
    content: "Olá!",
  },
];

describe("communicateWithOpenAI", () => {
  test("communicateWithOpenAI", () => {
    return communicateWithOpenAI(message).then((data) => {
      expect(typeof data).toBe("string");
    });
  });
});

// describe("communicateWithOpenAI", () => {
//   test("communicateWithOpenAI", async () => {
//     await expect(communicateWithOpenAI()).resolves.toBe("peanut butter");
//   });
// });
