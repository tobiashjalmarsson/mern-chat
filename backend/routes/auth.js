// Routes for authentication and authorization

const express = require('express');
const router = express.Router();

// Import controller
const auth_controller = require('../controllers/auth_controller');

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()


// Main route
router.get('/', jsonParser,auth_controller.main_controller);

//Login
router.get('/login', jsonParser,auth_controller.login_controller); 

//Logout
router.get('/logout', jsonParser,auth_controller.logout_controller); 

//Register
router.post('/register', jsonParser, auth_controller.register_controller);

//Authentication, will receive JSON
router.get('/authenticate', jsonParser, auth_controller.authenticate_controller);

module.exports = router;


