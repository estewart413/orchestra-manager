// Test Require
//console.log('hello world from users.model');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var mongooseUniqueValidator = require('mongoose-unique-validator');

var userSchema = new Schema({
    userType:    {type: String, required: true},                 //Admin, Orchestra Manager, Librarian, Member
    fName:       {type: String, required: true},
    lName:       {type: String, required: true},
    password:    {type: String, required: true},                 //Needs to be hashed later
    email:       {type: String, required: true, unique: true},
    userName:    {type: String, required: true},

})

//Schema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('userSchema', userSchema);