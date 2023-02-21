const express = require('express');
const app = express();
require('dotenv').config();

const routes = require('./routes/api');

const port = process.env.PORT || 5500;

app.use('/openai', routes);

app.listen(port, () => {
  console.log(`Server is running at port http://localhost:${port}`);
});
