//Import routes
const blogRouter = require("./blog-route")
const postRouter = require("./post-route")
const commentRouter = require("./comment-route")

module.exports = (app) => {
    // app.use(blogRouter);
    // app.use(postRouter);
    // app.use(commentRouter);
    /* Modification to avoid boiled code on each route: router.get("/blogs", findAll ) => router.get("/", findAll ) */
    app.use("/blogs", blogRouter);
    app.use("/posts", postRouter);
    app.use("/comments", commentRouter);
}