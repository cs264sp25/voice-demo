# Voice Demo

This demo program uses the OpenAI Text-to-Speech and Speech-to-Text APIs that allows you to turn text into lifelike spoken audio and vice-versa.

## OpenAI API

This project uses the OpenAI API. You need to create an account and get an API key to use the API. Consult the [quick start guide](https://platform.openai.com/docs/quickstart) for instructions.

## Run locally

Clone the repository and install the dependencies.

```bash
cd voice-demo
pnpm install
```

Create a `.env` file in the project root and add the following content.

```plaintext
OPENAI_API_KEY=sk-...
```

Finally, run the following command to make sure everything is working.

```bash
pnpm start
```

To run any of the demo files:

```bash
pnpm demo-01 # or demo-02, demo-03, etc.
```
