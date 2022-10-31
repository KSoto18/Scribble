//Modules
const fs = require('fs');
const dataBase = require('../db/db.json');

module.exports = function (app) {
    // GET Database
    app.get('/api/notes', function (req, res) {
        fs.readFile('../db/db.json', 'utf-8', function () {
            console.info(`Looking for notes...`);
            res.json(dataBase);
        });
    });

    //Post notes and add to Database
    app.post('/api/notes', function (req, res) {
        dataBase.push(req.body);

        // Updates the ID for each note
        dataBase.forEach((note, i) => {
            note.id = i + 1;
        });

        //Write new note into Database
        fs.writeFile('../db/db.json', JSON.stringify(dataBase), function () {
            console.info(`A new Note was added!`);
            res.json(dataBase);


        });

     
         //Delete Notes Function
         app.delete('/api/notes/:id', function (req, res) {
            

            fs.writeFile('../db/db.json', JSON.stringify(dataBase), function () {
                console.info(`A Note was deleted!`);
                res.json(dataBase);


            });

        });
    });
}

