const { Router } = require("express");
const router = new Router();

const { findAll } = require('../controllers/post-controller')

// router.get("/", (req, res) => {
//     return res.status(200).json({
//         items:posts
//     }).end()
// });
router.get("/", findAll)

module.exports = router