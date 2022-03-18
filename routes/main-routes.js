//Import routes
const blogRouter = require("./blog-route")
const postRouter = require("./post-route")
const commentRouter = require("./comment-route")

module.exports = (app) => {
    app.use(blogRouter);
    app.use(postRouter);
    app.use(commentRouter);
}