//Modules
const fs = require('fs');
const dataBase = require('../db/db.json');

module.exports = function (app) {
    // GET Database
    app.get('/api/notes', function (req, res) {
        res.json(dataBase)
    });

    //Post notes and add to Database
    app.post('/api/notes', function (req, res) {
        dataBase.push(req.body);
       
        // updates the ID for each note
        forEach((note, i) => {
            note.id = i + 2;
          });

        //Write new note into Database
        fs.writeFile('../db/db.json', JSON.stringify(dataBase), function () {
            console.log(`New note added!`);
            res.json(dataBase);
            

        });
    });
}


// NEED A DELETE NOTE FUNCTION