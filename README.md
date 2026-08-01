# My AI Chatbot Backend

Backend server for my AI chatbot using:

- Node.js
- Express
- OpenAI API

## Installation

```bash
npm install
```

Create a `.env` file from `.env.example`.

Example:

```
OPENAI_API_KEY=YOUR_API_KEY
OPENAI_MODEL=gpt-5.6
PORT=3000
```

Run locally:

```bash
npm start
```

Server runs on:

```
http://localhost:3000
```

Health Check:

```
GET /
```

Chat Endpoint:

```
POST /chat
```

Request:

```json
{
  "message": "Hello"
}
```

Response:

```json
{
  "reply": "Hello! How can I help you?"
}
```
