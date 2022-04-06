const { Router } = require('express');
const { signUp, login } = require('../controllers/user-controller')

const router = new Router();

router
    .post('/signIn', login)
    .post('/signUp', signUp );

module.exports = router;