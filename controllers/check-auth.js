const jwt = require('jsonwebtoken')


module.exports = (req, res, next) =>{
	try {
		const decoded = jwt.verify(req.body.token, process.env.JWT_SECRET)
		req.userDate = decoded
		next()
	} catch(error) {
		return res.status(404).json({
			message: 'Auth failed'
		})
	}
	

	next()
}