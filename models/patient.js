const mongoose = require('mongoose')

const patient = new mongoose.Schema({
	firstname: String,
	lastname: String,
	birthdate: Date,
	email: String,
	phone: String,
	profileURL: String,

})


module.exports = mongoose.model('Patient', patientSchema)