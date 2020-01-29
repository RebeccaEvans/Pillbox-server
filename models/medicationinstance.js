const mongoose = require('mongoose')

const medicationinstance = new mongoose.Schema({
	medname: String,
	dose_strength: Number,
	numdose: Number,
	day: String,
	time: Date,
	timeofday: Date,
	directions: String,
})


module.exports = mongoose.model('Medication', medicationSchema)