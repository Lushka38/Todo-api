const express = require('express');
const router = express.Router();
const TodoController = new (require('../controllers/todo.controller'));


router.get(`/`, async (request, response) => {
    try {
        let todoList = await TodoController.getTodo();
        console.log(todoList);
        return response.status(200).json({ status: 200, data: todoList, message: `successfully retrieved todo list` })
    } catch (e) {
        response.status(500).send({ message: e.message });
        //Todo - add error logger! 
    }
});

router.post(`/`, async (request, response) => {
    try {
        let newTodo = await TodoController.createTodo(request);
        return response.status(201).json({ status: 201, data: newTodo, message: `successfully create todo` })
    } catch (e) {
        response.status(500).send({ message: e.message });
    }
});

router.get(`/:id`, async (request, response) => {
    try {
        let todo = await TodoController.getTodoById(request);
        console.log(todo);
        return todo ? response.status(201).json({ status: 200, data: todo, message: `successfully retrived todo` }) : response.status(500).send({ message: "bad" });

    } catch (e) {
        response.status(500).send({ message: e.message });
    }
});


router.put(`/:id`, async (request, response) => {
    try {
        let todo = await TodoController.updateTodoById(request);
        return response.status(201).json({ status: 201, data: todo, message: `successfully modified todo` })
    } catch (e) {
        response.status(500).send({ message: e.message });
    }
});

router.delete(`/:id`, async (request, response) => {
    try {
        let todo = await TodoController.deleteTodoById(request);
        return response.status(201).json({ status: 201, data: {}, message: `successfully deleted todo` })
    } catch (e) {
        response.status(500).send({ message: e.message });
    }
});

router.delete(`/`, async (request, response) => {
    try {
        let todo = await TodoController.deleteTodo(request);
        return response.status(201).json({ status: 201, data: {}, message: `successfully deleted todo` })
    } catch (e) {
        response.status(500).send({ message: e.message });
    }
});

module.exports = router;