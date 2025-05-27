const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// GET /admin/users - list encargados with filters
router.get('/users', adminController.listUsers);

// GET /admin/students - list students with filters
router.get('/students', adminController.listStudents);

// GET /admin/users/:id/history - get user/student action history
router.get('/users/:id/history', adminController.getUserHistory);

module.exports = router;
