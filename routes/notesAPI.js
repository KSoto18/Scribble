//Modules
const fs = require('fs');
const dataBase = require('../db/db.json');

module.export = function (app){
   // GET Database
   app.get('/api/notes', function (req, res) {
     res.json(dataBase);
   });

   //Post to notes & add to Database


   //Write new note into Database
}


