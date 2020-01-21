const _ = require(`lodash`);
const TodoModel = require(`../models/todo.model`);


class TodoService {
    constructor() {

    }

    //todo-should i use here async?
    async getTodo() {
        try {
            return await TodoModel.find();
        } catch (e) {
            console.log(e);
        }
    }


    async createTodo(title) {
        const payload = { title, done: false };
        let newTodo = new TodoModel(payload);
        return await newTodo.save();
    }

    async updateTodoById(id, update) {
        try {
            return await TodoModel.findOneAndUpdate(id, update);
        } catch (e) {
            throw new Error(e);
        }
    }

    async getTodoById(id) {
        try {
            return await TodoModel.findById(id).exec();
        } catch (e) {
            throw new Error(e);
        }
    }

    async deleteTodoById(id) {
        return await TodoModel.deleteOne(id);
    }

    async deleteTodo() {
        return await TodoModel.deleteMany();
    }
}
//add expection

module.exports = TodoService;
