// Streaming speech-to-text (SST)
// Try to directly call the API with axios

import fs from "fs";
import axios from "axios";
import { OPENAI_API_KEY } from "./env";
import FormData from "form-data";

// Create form data
const formData = new FormData();
formData.append("file", fs.createReadStream("./data/demo-01.mp3"));
formData.append("model", "gpt-4o-mini-transcribe");
formData.append("stream", "true");

const response = await axios.post(
  "https://api.openai.com/v1/audio/transcriptions",
  formData,
  {
    headers: {
      "Authorization": `Bearer ${OPENAI_API_KEY}`,
      ...formData.getHeaders(),
    },
  }
);

for await (const chunk of response.data) {
  console.log(chunk); // This is not working as expected either.
}
