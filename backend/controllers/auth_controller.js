// Functions to query database
const db = require('../models/queries')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')


// Get config vars
dotenv.config()

// Function to generate access token
function generateAccessToken(username){
    return jwt.sign(username, process.env.TOKEN_SECRET, {expiresIn: "1800s"})
}

// Function for authentication(verification of token)
// Example:
// GET https://example.com:3000/auth/login
// Authorization: Bearer JWT_ACCESS_TOKEN
function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token,process.env.TOKEN_SECRET, (err, user) => {
        console.log(err)

        if (err){
            return res.sendStatus(403)
        }
        req.user = user

        next()
    })
}


//main controller
const main_controller = (req, res) => {
    console.log("Inside main controller");
    res.send("Not implemented: Auth: Main controller");
}
//login controller
//req should contain
//username: VARCHAR
//later adding password
//URL: http://localhost:3000/auth/login
const login_controller = (req, res) => {
    console.log("Inside login controller");
    res.send("Not implemented: Auth: Login controller");
}
//logout controller
//req should contain
//username: VARCHAR
//later adding password
const logout_controller = (req, res) => {
    console.log("Inside logout controller");
    res.send("Not implemented: Auth: Logout controlelr");
}

//register controller
//req should contain
//username: VARCHAR
//later adding password
const register_controller = (req, res) => {
    console.log("Inside register controller");
    res.send("Not implemented: Auth: Register controller");
}


const authenticate_controller = (req, res) => {
    console.log("INside authenticate controller");
    const { name } = req.body
    console.log(name)
    console.log(generateAccessToken({name})) 
    res.send("from authenticate controller")
}



exports.main_controller = main_controller;
exports.login_controller = login_controller;
exports.logout_controller = logout_controller;
exports.register_controller = register_controller;
exports.authenticate_controller = authenticate_controller;
exports.authenticateToken = authenticateToken;
