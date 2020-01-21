const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const TodoModel = new Schema({
    title: String,
    done: Boolean
});

module.exports = mongoose.model(`Todo`, TodoModel);