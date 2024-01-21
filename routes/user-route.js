const { Router } = require('express');
const { signUp, login, signOut } = require('../controllers/user-controller')
const { restrict } = require('../lib/middlewares/auth-middleware')

const router = new Router();

router
    .post('/signIn', login)
    .post('/signUp', signUp )
    .get('/logout', restrict, signOut);

module.exports = router;