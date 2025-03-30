// The Audio API provides two endpoints for speech-to-text (SST)
// - transcriptions: for converting English audio to text
// - translations: convert audio in foreign languages into text in English
// We'll stick to transcriptions.
// Consult the docs: https://platform.openai.com/docs/guides/speech-to-text

import fs from "fs";
import OpenAI from "openai";
import { OPENAI_API_KEY } from "./env";

// Initialize the OpenAI API client
const openai = new OpenAI({
  apiKey: OPENAI_API_KEY
});

// Transcribe the audio file
const transcription = await openai.audio.transcriptions.create({
  // Make sure you already run demo-01 to generate the audio file
  file: fs.createReadStream("./data/demo-01.mp3"),
  // The Transcriptions API only supports files that are less than 25 MB. 
  // If you have an audio file that is longer than that, you will need to break
  // it up into chunks of 25 MB's or less or used a compressed audio format. 
  model: "gpt-4o-transcribe", // gpt-4o-mini-transcribe or whisper-1 (old!)
});

console.log(transcription.text);
