// Functions to query database
const db = require('../models/queries')


//main controller
const main_controller = (req, res) => {
    console.log("Inside main controller");
    res.send("Not implemented: Auth: Main controller");
}
//login controller
//req should contain
//username: VARCHAR
//later adding password
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


exports.main_controller = main_controller;
exports.login_controller = login_controller;
exports.logout_controller = logout_controller;
exports.register_controller = register_controller;
