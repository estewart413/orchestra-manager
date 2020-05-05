var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var mongooseUniqueValidator = require('mongoose-unique-validator');

var ensembleSchema = new Schema({
    id:            {type: String, unique: true}, //Ensemble Unique Id
    title:         {type: String, required: true}, //Ensemble Unique Name
    chairs:        { type: [] }
})

//Schema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('ensembleSchema', ensembleSchema);