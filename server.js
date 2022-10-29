const express = require('express');
const app = express();

// PORT
const PORT = 3001;


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Express ROUTES

// PORT Listener
app.listen(PORT, () =>
  console.log(` ☄️ Listening to: http://localhost:${PORT}`)
);