require('dotenv').config();

const tasksRoute = require('./src/routes/tasks');

const express = require('express');
const app = express();

app.use(express.json());
app.use('/tasks', tasksRoute);
app.use((req, res) => {
    return res.status(404).send({
        message: 'Not found.'
    });
});

module.exports = app;
