// Routes for authentication and authorization

const express = require('express');
const router = express.Router();

// Import controller
const auth_controller = require('../controllers/auth_controller');


// Main route
router.get('/', auth_controller.main_controller);

//Login
router.get('/login', auth_controller.login_controller); 

//Logout
router.get('/logout', auth_controller.logout_controller); 

//Register
router.post('/register', auth_controller.register_controller);


module.exports = router;


