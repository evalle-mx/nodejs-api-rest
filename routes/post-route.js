const { Router } = require("express");
const router = new Router();

const posts = [
    { id:1, title:"Post Principal", content:"Contenido principal", blogId:1 },
    { id:2, title:"Post Secundario", content:"Contenido del segundo Post", blogId:2 }
];

//router.get("/posts", (req, res) => {
router.get("/", (req, res) => {
    return res.status(200).json({
        items:posts
    }).end()
});

module.exports = router