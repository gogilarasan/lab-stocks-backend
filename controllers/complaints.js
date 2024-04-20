const id = require('shortid');

class TodoController {
    static async createTodo(db, obj) {
        try {
            const task_id = id.generate();
            obj.task_id = task_id;
            const todo = await db.Todo.create(obj);
            return todo;
        } catch (error) {
            console.error('Error creating todo:', error);
            throw error;
        }
    }

    static async getTodoById(db, taskId) {
        try {
            const todo = await db.Todo.findByPk(taskId);
            return todo;
        } catch (error) {
            console.error('Error getting todo by ID:', error);
            throw error;
        }
    }

    static async getAllTodos(db) {
        try {
            const todos = await db.Todo.findAll();
            return todos;
        } catch (error) {
            console.error('Error getting all todos:', error);
            throw error;
        }
    }

    static async updateTodo(db, taskId, todoData) {
        try {
            await db.Todo.update(todoData, {
                where: { task_id: taskId }
            });
            const updatedTodo = await db.Todo.findByPk(taskId);
            return updatedTodo;
        } catch (error) {
            console.error('Error updating todo:', error);
            throw error;
        }
    }

    static async updateTodoStatus(db, taskId, status) {
        try {
            await db.Todo.update({ status }, {
                where: { task_id: taskId }
            });
            const updatedTodo = await db.Todo.findByPk(taskId);
            return updatedTodo;
        } catch (error) {
            console.error('Error updating todo status:', error);
            throw error;
        }
    }
    

    static async deleteTodo(db, taskId) {
        try {
            const todo = await db.Todo.findByPk(taskId);
            if (todo) {
                await todo.destroy();
                return true;
            } else {
                console.error('Todo not found with ID:', taskId);
                return false;
            }
        } catch (error) {
            console.error('Error deleting todo:', error);
            throw error;
        }
    }
}

module.exports = TodoController;
