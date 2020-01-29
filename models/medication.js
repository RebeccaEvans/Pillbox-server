const mongoose = require('mongoose')

const medication = new mongoose.Schema({
	name: String,
	totalquantity: Number,
	doseform: [],
	numdose: Number,
	iseveryday: Boolean,
	daysofweek: [],
	timeofday: Date,
	frequencyNum: Number,
	frequencyEvery: [],
	frequencyHours: Number,
	frequencyDays: [],
	refillnumber: Number,
	pharmacy: String,
	prescriber: String,
	expiration: Date,
	directions: String,
})


module.exports = mongoose.model('Medication', medicationSchema)