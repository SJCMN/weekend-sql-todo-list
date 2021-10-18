const { response } = require('express');
const express = require('express');
const { read } = require('fs');
const titleRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');

// GET
// this is the titles GET route
titleRouter.get(`/`, (req, res) => {
    console.log(`Received a GET request`);
    // build the SQL query
    let queryText = `SELECT * FROM "titles"`;

    // send the query to the SQL database
    pool
        .query(queryText)
        .then((response) => {
            // the response here is a bunch of koalas
            let titles = response.rows;
            console.log(`Here are the saved titles`, titles);
            // send the tasks to the client
            res.send(titles);
        })
        .catch((error) => {
            console.log(`There was an error in the GET /titles route:`, error);
            // let the client know that there was an error on the server
            res.sendStatus(500);
        });
});

// POST
//adds a new title to the title list
//request body must be a title object with ("title_name", "date")
titleRouter.post('/', (req, res) => {
    console.log(`in post /titles`);
    let newTitle = req.body;
    console.log('Adding task', newTitle);

    let queryText = `INSERT INTO "titles" ("title_name",  "date")
    VALUES($1, $2, $3);`;

    let values = [newTitle.title_name, newTitle.date]

    pool
        .query(queryText, values)
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error adding new task`, error);
            res.sendStatus(500);
        });
});

// PUT
titleRouter.put('/:id', (req, res) => {
    let id = req.params.id;
    let title= req.body.completed;

    console.log(id);
    console.log(completed);

    let queryText = `
        UPDATE "titles"
        SET "title_name" = $2
        WHERE "id" = $1
         `

    let values = [id, title];

    pool.query(queryText, values).then(result => {
        res.sendStatus(204);

    }).catch(err => {
        console.log('Error with GET query', err);
        res.sendStatus(500);
    })
})

// DELETE
titleRouter.delete('/:id', (req, res) => {
    let id = req.params.id
    console.log(id);
    // pool.query...
    let queryText = `	
    DELETE FROM "titles"
    WHERE "id" = $1;
    `
    let values = [id];

    pool.query(queryText, values).then(result => {
        res.sendStatus(204);

    }).catch(err => {
        console.log('Error with GET query', err);
        res.sendStatus(500);
    })

});

module.exports = titleRouter;
