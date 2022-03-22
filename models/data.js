var mongoose = require('mongoose');
var Schema = mongoose.Schema;

dataSchema = new Schema( {
	
	unique_id: Schema.ObjectId,
	dataCurr: Array,
	dataPrev: Array
}),
Data = mongoose.model('data', dataSchema);

module.exports = Data;