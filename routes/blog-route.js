const { Router } = require("express");
const router = new Router();
const url = require('url');
const { findAll, findById } = require('../controllers/blog-controller')

/* Receive params through URL (No sensitive data)*/
//by QueryString (?username=)
router.get("/blogs", findAll )
//Params /:param
router.get("/blogs/:id", findById )

module.exports = router
