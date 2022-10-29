const express = require('express');
const app = express();

const path = require('path');

// PORT
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// GET ROUTE for index (homepage)
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//GET ROUTE for notes
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);




// PORT Listener
app.listen(PORT, () =>
  console.log(` ☄️ Listening to: http://localhost:${PORT}`)
);