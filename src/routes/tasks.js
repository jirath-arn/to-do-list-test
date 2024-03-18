const tasksController = require('../controllers/tasksController');

const express = require('express');
const router = express.Router();

// Get all.
router.get('/', tasksController.getAll);

// Get specific.
router.get('/:id', tasksController.getTask);

// Create.
router.post('/', tasksController.createTask);

// Update.
router.put('/:id', tasksController.updateTask);

// Delete.
router.delete('/:id', tasksController.deleteTask);

module.exports = router;
