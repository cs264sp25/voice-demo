// The Speech API provides support for realtime audio streaming using chunk
// transfer encoding. This means the audio can be played before the full file is
// generated and made accessible.

import OpenAI from "openai";
import { OPENAI_API_KEY } from "./env";
import { playAudio } from "openai/helpers/audio";

// Initialize the OpenAI API client
const openai = new OpenAI({
  apiKey: OPENAI_API_KEY
});

// Generate speech using the GPT-4o Mini TTS model
const response = await openai.audio.speech.create({
  model: "gpt-4o-mini-tts",
  voice: "coral",
  input: "Today is a wonderful day to build something people love!",
  instructions: "Speak in a cheerful and positive tone.",
  response_format: "wav", // OpenAI recommends using wav for the fastest response times
});

// This helper function does not work in the browser
// See the wavtools for a browser-compatible solution:
// https://www.npmjs.com/package/wavtools
await playAudio(response);
// Note: On my Mac, I had to install ffmpeg to get this to work:
// brew install ffmpeg