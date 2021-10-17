
# Weekend TODO App

## Local Install

To use this project:
Fork this repo.
Clone your forked copy.
NPM install dependencies.
Create a sql database - see database.sql for queries.
NPM START to activate a server.
Browse to localhost:5000.

## Project Overview

This is a TODO app using full-stack CRUD HTTP interactions. 
The front end was created with Javascript, jQuery, HTML, Bootstrap, and some additional css. 
The back end is an Express server, connected with PG and body-parser, to a postgreSQL database.

This is a project to practice using the Full-Stack. 
I started with a plan - see TODO.txt, laying out the features and requirements.
I used a template from PRIME academy containing an instruction readme.md.
I initialized a repo on Github, and used NPM to initialize the project locally.

This project is organized using vsCode and contains folders for server files and is separated into sub folders.
Once the file structure was in place and the project was initialized I inserted two tables into a new sql database. I wanted to be able to store todo list items and list names each in their own table to capture the appropriate level of data detail.

This project is a chance to practice git branching and pull requests. 

The next step was the front end user interface. I constructed the front focusing on consumer quality interaction  details to inform how the data would be sent back to and requested from the server.
Once the UI was established, it was time to use jQuery to gather and collect the user inputs, and prepare routes to send data over to be stored in the db. 

With the front end complete the server would have receiving routes added. Incoming data would be converted into parameters so sql queries could safely be sent to the db. Out going data would be packaged into objects to be used to dynamically update DOM elements using javascript.



Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
