//Import routes
const blogRouter = require('./blog-route')
const postRouter = require('./post-route')
const commentRouter = require('./comment-route')

const userRouter = require('./user-route')
const { restrict } = require('../lib/middlewares/auth-middleware');

module.exports = (app) => {
    app.use('/users', userRouter);
    
    app.use(restrict); // las rutas a partir de este punto implementan la validacion restrict
    app.use('/blogs', blogRouter);
    app.use('/posts', postRouter);
    app.use('/comments', commentRouter);
    
}