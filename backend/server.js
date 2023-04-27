const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/generate-image', async (req, res) => {
  const { text } = req.body;
  const apiKey = process.env.OPENAI_API_KEY;
  const prompt = `generate image of ${text}`;

  console.log(`Prompt: ${prompt}`);

  try {
    const response = await axios({
      method: 'post',
      url: 'https://api.openai.com/v1/images/generations',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
        model: 'image-alpha-001',
      },
      data: {
        model: 'image-alpha-001',
        prompt: prompt,
        num_images: 1,
        size: '512x512',
        response_format: 'url',
      },
    });

    console.log(`Response: ${JSON.stringify(response.data)}`);

    const imageUrl = response.data.data[0].url;
    res.json({ success: true, imageUrl });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error });
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
