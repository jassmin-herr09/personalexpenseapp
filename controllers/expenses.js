const Expense = require("../models/expense");

module.exports = {
    new: newExpense,
    create,
    index,
    edit,
    update,
    delete: deleteExpense,
};

function newExpense(req,res) {
    res.render('expenses/new');

}

function create(req,res) {
    Expense.create(req.body, function(err, expense){
        res.redirect('/expenses');
    });
}

function index(req,res){
    Expense.find({}, function(err, expenses){
        res.render('expenses/index', {expenses});
    });

}

function edit(req,res){
 Expense.findById(req.params.id,function(err,expense){
     if(err){
       console.log(err);
     return
     }
     res.render('expenses/edit', { expense }); 
 })
 

}

function update(req,res){
  //console.log(req.params.id,'is the id', req.body, 'Is the body');  
  Expense.findByIdAndUpdate(req.params.id,req.body, function(err,expense){
  res.redirect('/expenses');
  
  });
}

function deleteExpense(req,res){
 console.log(req.params.id,'is the Id');
 Expense.findByIdAndRemove(req.params.id, function(err,deleted){
 res.redirect('/expenses');
 
  });

}