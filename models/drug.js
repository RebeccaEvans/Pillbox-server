const mongoose = require('mongoose')

const drug = new mongoose.Schema({
	name: String,
})


module.exports = mongoose.model('Drug', drugSchema)