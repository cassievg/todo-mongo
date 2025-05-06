import express from 'express';

const router = express.Router();
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
} from '../controllers/todoController.js';

/**
 * @swagger
 * tags:
 *   name: Todos
 *   description: To-do management
 */

/**
 * @swagger
 * /api/todos:
 *   get:
 *     summary: Get all todos
 *     tags: [Todos]
 */
router.get('/', getTodos);

/**
 * @swagger
 * /api/todos:
 *   post:
 *     summary: Create a new todo
 *     tags: [Todos]
 */
router.post('/', createTodo);

/**
 * @swagger
 * /api/todos/{id}:
 *   put:
 *     summary: Update a todo
 *     tags: [Todos]
 */
router.put('/:id', updateTodo);

/**
 * @swagger
 * /api/todos/{id}:
 *   delete:
 *     summary: Delete a todo
 *     tags: [Todos]
 */
router.delete('/:id', deleteTodo);

export default router;