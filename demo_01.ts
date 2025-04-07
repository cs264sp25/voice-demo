// The Audio API provides a speech endpoint using a text-to-speech (TTS) model.
// It comes with 11 built-in voices. Try these at
// https://www.openai.fm/ and consult the docs at
// https://platform.openai.com/docs/guides/text-to-speech

// You can prompt the model to control aspects of speech, including: Accent,
// Emotional range, Intonation, Impressions, Speed of speech, Tone, Whispering

import fs from "fs";
import path from "path";
import OpenAI from "openai";
import { OPENAI_API_KEY } from "./env";

// Initialize the OpenAI API client
const openai = new OpenAI({
  apiKey: OPENAI_API_KEY
});

// Save the generated speech to a file 
fs.mkdirSync("./data", { recursive: true });
const speechFile = path.resolve("./data/demo-01.mp3");

// Generate speech using the GPT-4o Mini TTS model
const mp3 = await openai.audio.speech.create({
  model: "gpt-4o-mini-tts",
  voice: "coral",
  input: "Today is a wonderful day to build something people love!",
  instructions: "Speak in a cheerful and positive tone.",
});

// Save the audio to a file
const buffer = Buffer.from(await mp3.arrayBuffer());
await fs.promises.writeFile(speechFile, buffer);
