var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var mongooseUniqueValidator = require('mongoose-unique-validator');

var ensembleSchema = new Schema({
<<<<<<< HEAD
    id:            {type: String, unique: true}, //Ensemble Unique Id
    title:         {type: String, required: true}, //Ensemble Unique Name
    chairs:        { type: [] }
=======
    enId:    {type: String, unique: true},        //Ensemble Unique Id
    enName:       {type: String},   //Ensemble Unique Name
    enType:       {type: String},   //Ensemble Type , Ex. Jazz Band, Symphony Orchestra
    chairs:       { type: [] },
    accManager:    {type: [String]},                  //User Type Manager
    accConduct:       {type: [String]},               //User Type Conductor
    accLibrarian:    {type: [String]},                //User Type Librarian
    accMember:    {type: [String]},                //User Type Librarian
>>>>>>> master
})

//Schema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('ensembleSchema', ensembleSchema);