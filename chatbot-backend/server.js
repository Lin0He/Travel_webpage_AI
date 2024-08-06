const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

let messages = [{ role: "system", content: "You are a helpful assistant." }];

// Endpoint to get messages
app.get('/api/chat', (req, res) => {
  res.json(messages);
});

// Endpoint to post a new message
app.post('/api/chat', (req, res) => {
  const message = req.body;
  messages.push(message);
  res.status(200).send('Message received');
});

// Endpoint to handle OpenAI API call
app.post('/api/openai', async (req, res) => {
  const { messages } = req.body;
  const openaiApiKey = process.env.VITE_REACT_APP_OPENAI_API_KEY;

  try {
    const completion = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-4',
      messages: messages
    }, {
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json'
      }
    });

    res.json(completion.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
