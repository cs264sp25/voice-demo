// Streaming speech-to-text (SST)

import fs from "fs";
import OpenAI from "openai";
import { OPENAI_API_KEY } from "./env";

// Initialize the OpenAI API client
const openai = new OpenAI({
  apiKey: OPENAI_API_KEY
});

// Transcribe the audio file
const stream = await openai.audio.transcriptions.create({
  // Make sure you already run demo-01 to generate the audio file
  file: fs.createReadStream("./data/demo-01.mp3"),
  model: "gpt-4o-mini-transcribe",
  response_format: "text",
  stream: true,
});

for await (const chunk of stream) {
  // console.log(chunk); // This is not working as expected.
  process.stdout.write(chunk as unknown as string);
}

// The streaming API is not working as expected.
// The chunk comes in character by character instead of object by object.
// If you use process.stdout.write, you can see how the object looks like.

/*

data: {"type":"transcript.text.delta","delta":"Today"}

data: {"type":"transcript.text.delta","delta":" is"}

data: {"type":"transcript.text.delta","delta":" a"}

data: {"type":"transcript.text.delta","delta":" wonderful"}

data: {"type":"transcript.text.delta","delta":" day"}

data: {"type":"transcript.text.delta","delta":" to"}

data: {"type":"transcript.text.delta","delta":" build"}

data: {"type":"transcript.text.delta","delta":" something"}

data: {"type":"transcript.text.delta","delta":" people"}

data: {"type":"transcript.text.delta","delta":" love"}

data: {"type":"transcript.text.delta","delta":"."}

data: {"type":"transcript.text.done","text":"Today is a wonderful day to build something people love."}

data: [DONE]

*/

