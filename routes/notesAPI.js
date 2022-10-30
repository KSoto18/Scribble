//Modules
const fs = require('fs');
const dataBase = require('../db/db.json');

module.export = function (app){
   // GET Database
   app.get('/api/notes', function (req, res) {
     res.json(dataBase);
   });

   //Post notes and add to Database
   app.post('/api/notes', function (req, res) {
     dataBase.push(req.body);
   });

   //Write new note into Database
   
}


