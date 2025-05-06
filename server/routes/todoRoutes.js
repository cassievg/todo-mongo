const express = require('express');
const { getTodos, createTodo, updateTodo, deleteTodo } = require('../controllers/todoController');
const router = express.Router();

/**
 * @swagger
 * /todos:
 *   get:
 *     get all todo
 *   post:
 *     create todo
 * /todos/{id}:
 *   put:
 *     update by ID
 *   delete:
 *     delete by ID
 */

router.get('/', getTodos);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;