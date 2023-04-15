const cookieSession = require('cookie-session');
const express = require('express');
const cors = require('cors');
const passportSetup = require('./passport');
const passport = require('passport');
const authRoute = require('./routes/auth');
const app = express();
require('dotenv').config();

const routes = require('./routes/api');

app.use(
  cookieSession({ name: 'session', keys: ['lama'], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  })
);
const port = process.env.PORT || 5000;

// parsing application/json
app.use(express.json());
// parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/openai', routes);

app.listen(port, () => {
  console.log(`Server running at port http://localhost:5000!`);
});

app.use('/auth', authRoute);

app.listen('5000', () => {
  console.log('Server is running!');
});
