const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
// const tasksRouter = require('./routes/tasks.router')
// const titlesRouter = require('./routes/titles.router')

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

// ROUTES
// app.use('/tasks', taskRouter)
// app.use('/')

// Start listening for requests on a specific port
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});