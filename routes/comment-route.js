const { Router } = require("express")
const router = new Router();
//Injecting function from controller
const { findAll } = require('../controllers/comment-controller');

/* Moved to comment-model.js
const comments = [
    { id:1, content:"me gusto el blog", likes:0, postId:1 },
    { id:2, content:"NO me gusto el blog", likes:0, postId:1 },
    { id:3, content:"Me parecio interesante", likes:0, postId:2 },
];//*/

/* Specified in comment-controller.js 
router.get("/", (req, res) => {
    return res.status(200).json({
        items:comments
    }).end()
});*/
router
    .get("/", findAll)
    ;


module.exports = router
