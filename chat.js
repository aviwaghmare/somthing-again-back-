import express from "express";
import OpenAI from "openai";

const router = express.Router();

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

router.post("/", async (req, res) => {

    try {

        const { message } = req.body;

        if (!message) {
            return res.status(400).json({
                error: "Message Required"
            });
        }

        const response = await client.responses.create({

            model: process.env.OPENAI_MODEL || "gpt-5.6",

            input: [
                {
                    role: "system",
                    content: "You are a helpful AI assistant."
                },
                {
                    role: "user",
                    content: message
                }
            ]

        });

        res.json({
            reply: response.output_text
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: "Server Error"
        });

    }

});

export default router;
