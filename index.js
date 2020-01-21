const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 1337;

const config = require('./config/db');
const TodoRoute = require('./routes/todo.route');


mongoose.connect(config.DB, { useNewUrlParser: true, useFindAndModify: false }).then(() => {
    console.log(`DB is connected!`);
}, err => console.log(`cannot connect to DB, error: ${err}`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/todo', TodoRoute);

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
})