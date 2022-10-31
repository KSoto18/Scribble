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

        // Updates the ID for each note
        dataBase.forEach((note, i) => {
            note.id = i + 1;

        });

        dataBase.push(req.body);

        //Write new note into Database
        fs.writeFile('../db/db.json', JSON.stringify(dataBase), function () {
            console.info(`A new Note was added!`);
            console.info(`-------------------------`)
            res.json(dataBase);


        });


        //Delete Notes Function
        app.delete('/api/notes/:id', function (req, res) {
            let noteId = req.params.id;

            dataBase.splice(noteId - 1, 1);

            //Updates the Id for each note
            dataBase.forEach((note, i) => {
                note.id = i + 1;
            });

            fs.writeFile('../db/db.json', JSON.stringify(dataBase), function () {
                console.info(`A Note was deleted!`);
                console.info(`-------------------------`)
                res.json(dataBase);


            });
        });
    });
}

