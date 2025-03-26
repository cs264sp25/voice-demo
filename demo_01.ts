import OpenAI from "openai";
import { OPENAI_API_KEY } from "./env";

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

const response = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [
    {
      role: "user",
      content: "Hi!",
    },
  ],
});

console.log(response.choices[0].message.content);
