//main controller
const main_controller = (req, res) => {
    console.log("Inside main controller");
    res.send("Not implemented: Auth: Main controller");
}
//login controller
const login_controller = (req, res) => {
    console.log("Inside login controller");
    res.send("Not implemented: Auth: Login controller");
}
//logout controller
const logout_controller = (req, res) => {
    console.log("Inside logout controller");
    res.send("Not implemented: Auth: Logout controlelr");
}

//register controller
const register_controller = (req, res) => {
    console.log("Inside register controller");
    res.send("Not implemented: Auth: Register controller");
}

exports.main_controller = main_controller;
exports.login_controller = login_controller;
exports.logout_controller = logout_controller;
exports.register_controller = register_controller;
