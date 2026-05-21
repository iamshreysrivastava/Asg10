const express = require('express');
const router = express.Router();

const studentController = require('../controllers/studentController');

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/students', studentController.getAllStudents);

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.get('/add', studentController.showAddForm);
router.post('/add', studentController.addStudent);

router.get('/edit/:id', studentController.showEditForm);
router.put('/edit/:id', studentController.updateStudent);

router.delete('/delete/:id', studentController.deleteStudent);

module.exports = router;