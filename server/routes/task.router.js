const { response } = require('express');
const express = require('express');
const { read } = require('fs');
const taskRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');

// GET
// this is the tasks GET route
taskRouter.get(`/`, (req, res) => {
    console.log(`Received a GET request`);
    // build the SQL query
    let queryText = `SELECT * FROM "tasks"`;

    // send the query to the SQL database
    pool
        .query(queryText)
        .then((response) => {
            // the response here is a bunch of koalas
            let tasks = response.rows;
            console.log(`Here are the saved tasks`, tasks);
            // send the tasks to the client
            res.send(tasks);
        })
        .catch((error) => {
            console.log(`There was an error in the GET /tasks route:`, error);
            // let the client know that there was an error on the server
            res.sendStatus(500);
        });
});

// POST
//adds a new task to the task list
//request body must be a task object with ("task_name", "completed", "date")
taskRouter.post('/', (req, res) => {
    console.log(`in post /tasks`);
    let newTask = req.body;
    console.log('Adding task', newTask);

    let queryText = `INSERT INTO "tasks" ("task_name", "completed", "date")
    VALUES($1, $2, $3);`;

    let values = [newTask.task_name, newTask.completed, newTask.date]

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
taskRouter.put('/:id', (req, res) => {
    let id = req.params.id;
    let completed = req.body.completed;

    console.log(id);
    console.log(completed);

    let queryText = `
        UPDATE "tasks"
        SET "ready_to_transfer" = $2
        WHERE "id" = $1
         `

    let values = [id, completed];

    pool.query(queryText, values).then(result => {
        res.sendStatus(204);

    }).catch(err => {
        console.log('Error with GET query', err);
        res.sendStatus(500);
    })
})

// DELETE
taskRouter.delete('/:id', (req, res) => {
    let id = req.params.id
    console.log(id);
    // pool.query...
    let queryText = `	
    DELETE FROM "tasks"
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

module.exports = taskRouter;
