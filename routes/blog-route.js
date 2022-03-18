const { Router } = require("express");
const router = new Router();

const blogs = [
    {id:1, title: "Blog 1", username:"admin"},
    {id:2, title: "Blog 2", username:"admin"}
];

router.get("/blogs", (req, res) => {
    return res.status(200).json({
        items:blogs
    }).end()
})

module.exports = router
