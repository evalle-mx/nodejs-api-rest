const { Router } = require("express");
const router = new Router();
const url = require('url');
const { findAll, findById, createBlog } = require('../controllers/blog-controller')

/* Receive params through URL (No sensitive data)*/
//by QueryString (?username=)
//router.get("/blogs", findAll )
//router.get("/", findAll )
//Params /:param
/* HTTP Method */
//router.get("/blogs/:id", findById )

router.get("/:id", findById );
router
    .get("/", findAll )
    .post("/", createBlog );
    


module.exports = router
