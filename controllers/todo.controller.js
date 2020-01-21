const todoService = new (require(`../services/todo.service`));

class TodoController {
    constructor() { }

    async getTodo() {
        try {
            return await todoService.getTodo();
        } catch (e) {
            console.log(e);
        }
    }


    async createTodo(request) {
        try {
            const { title } = request.body;
            return await todoService.createTodo(title);
        } catch (e) {
            console.log(e);
        }
    }

    async updateTodoById(request) {
        try {
            const id = request.params.id;
            const updateTodo = request.body;
            return await todoService.updateTodoById(id, updateTodo);
        } catch (e) {
            console.log(e);
        }
    }

    async getTodoById(request) {
        try {
            const id = request.params.id;
            return await todoService.getTodoById(id);
        } catch (e) {
            console.log("e", e);
        }
    }

    async deleteTodoById(request) {
        try {
            const { id } = request.params.id;
            return await todoService.deleteTodoById(id);
        } catch (e) {
            console.log(e);
        }
    }

    async deleteTodo() {
        try {
            return await todoService.deleteTodo();
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = TodoController;