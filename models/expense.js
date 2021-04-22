const mongoose = require('mongoose');
const Schema = mongoose.Schema; //shortcut variable

const expenseSchema = new Schema({
  text: {
    type: String,
    required: [true,'Please add details']  

},
   amount: {
     type: Number,
     required: [true, 'Please add a positive or negative integer'] 

 },

},{timestamps: true});

module.exports = mongoose.model('Expense', expenseSchema);
