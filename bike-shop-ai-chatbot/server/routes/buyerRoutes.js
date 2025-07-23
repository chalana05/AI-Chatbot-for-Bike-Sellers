const express = require('express');
const router = express.Router();
const Buyer = require('../models/Buyer');
require('dotenv').config();

const OpenAI = require('openai');
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Save buyer info
router.post('/buy', async (req, res) => {
  try {
    const { name, email, bikeModel } = req.body;
    const buyer = new Buyer({ name, email, bikeModel });
    await buyer.save();
    res.status(200).json({ message: 'Buyer saved' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save buyer' });
  }
});

// AI chatbot
router.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
    });
    const reply = response.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    res.status(500).json({ error: 'Chatbot error' });
  }
});

module.exports = router;
