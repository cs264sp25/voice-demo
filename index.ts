import { generateText } from "ai";
import { createOpenAI } from '@ai-sdk/openai';
import { OPENAI_API_KEY } from "./env";

const openai = createOpenAI({
  apiKey: OPENAI_API_KEY,
  compatibility: 'strict', // strict mode, enable when using the OpenAI API
});

const { text } = await generateText({
  model: openai('gpt-4o-mini'),
  prompt: "Hi!",
});

console.log(text);

// Hello! How can I assist you today?