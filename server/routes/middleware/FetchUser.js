var jwt = require('jsonwebtoken');


const fetchuser = (req, res, next) => {
	//get user from jwt token and add id to required obj
	const token = req.header('auth-token');

	if (!token) {
		res.send({
			error: "Please use a valid token"
		});
	}
	try {
		const data = jwt.verify(token, process.env.JWT_SECRET);
		req.user = data.user;
		next();
	} catch (error) {
		res.send({
			error: "Please use a valid token"
		});

	}

}



module.exports = fetchuser;