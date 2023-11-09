
const JWT = require('jsonwebtoken')

const JWT_SECRET  = "AADNADI#$%DJNID"

//this is use to validate the user whether it is sign in or not
const requireSignIn = async (req, res, next) => {


    try {
        const decode = JWT.verify(req.headers.authorization, JWT_SECRET)
        req.user = decode
        next()

    } catch (error) {
        console.log(error);
    }
}

module.exports.requireSignIn= requireSignIn