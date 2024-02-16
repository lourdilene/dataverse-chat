// import { getApiKey } from "./apiKey.js";
// import axios from "axios";
// const axios = require("axios");
// import axios from "https://cdn.skypack.dev/axios";
const OPENAI_API_KEY = "1234";

// const OPENAI_API_KEY = getApiKey();

// const url = "https://api.openai.com/v1/models";
// const headers = { Authorization: `Bearer ${OPENAI_API_KEY}` };

// axios
//   .get(url, { headers })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error("Erro ao fazer a solicitação: ", error);
//   });

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

openai.models
  .list()
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Erro ao fazer a solicitação: ", error);
  });

export const communicateWithOpenAI = (messages) => {
  //Aquí es donde debes implementar la petición con fetch o axios
};
