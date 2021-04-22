const express = require('express');
const router = express.Router();
const expensesCtrl = require('../controllers/expenses');


//we define route for anchor tag
router.get('/', expensesCtrl.index);
router.get('/new', expensesCtrl.new)
router.post('/', expensesCtrl.create);
router.get('/:id', expensesCtrl.edit);
router.put('/:id', expensesCtrl.update);
router.delete('/:id', expensesCtrl.delete);



module.exports = router;
