var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var mongooseUniqueValidator = require('mongoose-unique-validator');

var ensembleSchema = new Schema({
    enId:    {type: String, required: true, unique: true},        //Ensemble Unique Id
    enName:       {type: String, required: true},   //Ensemble Unique Name
    enType:       {type: String, required: true},   //Ensemble Type , Ex. Jazz Band, Symphony Orchestra
    accManager:    {type: [String]},                  //User Type Manager
    accConduct:       {type: [String]},               //User Type Conductor
    accLibrarian:    {type: [String]},                //User Type Librarian
    accMember:    {type: [String]},                //User Type Librarian
})

//Schema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('ensembleSchema', ensembleSchema);