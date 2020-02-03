require('dotenv').config()
let router = require('express').Router()
let db = require('../models')
let jwt = require('jsonwebtoken')
const checkAuth = require('../controllers/check-auth')


router.get("/medication", checkAuth, (req, res) =>{
	console.log('medication route get')

})