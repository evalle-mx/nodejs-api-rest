/* API-Rest NodeJS -> MongoDB Atlas [https://youtu.be/uO3d_xH3xgc] */
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
//Import routes
const blogRouter = require("./routes/blog-routes")
const postRouter = require("./routes/post-route")
const commentRouter = require("./routes/comment-route")


app
.get("/", (req, res) => res.send('Hola Mundo'))
.get("/welcome", (req, res) => res.send('<h1>Welcome to my app</h1>'));

app.use(blogRouter);
app.use(postRouter);
app.use(commentRouter);

app.listen(port, () => console.log(`Server running on port ${port} 🔥`) );

