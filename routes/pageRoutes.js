//Module
const path = require('path');

// GET ROUTE for index (homepage)
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
 );

//GET ROUTE for notes
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
 );

