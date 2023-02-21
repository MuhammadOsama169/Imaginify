const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {
  try {
    const response = await openai.createImage({
      n: 2,
      size: '512x512',
    });
    const image_result = response.data.data;
    res.status(200).json({
      success: true,
      data: image_result,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { generateImage };
