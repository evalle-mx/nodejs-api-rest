const { Router } = require("express");
const router = new Router();
const url = require('url');
const { findAll, findById, createBlog } = require('../controllers/blog-controller');
// const { restrict } = require('../lib/middlewares/auth-middleware');

// router.use(restrict); // las rutas a partir de este punto implementan la validacion restrict
router.get("/:id", findById );
router
    .get("/", findAll )
    .post("/", createBlog );
    


module.exports = router
