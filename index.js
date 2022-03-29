/* API-Rest NodeJS -> MongoDB Atlas [https://youtu.be/uO3d_xH3xgc] */
const express = require('express');
const bodyParser = require("body-parser");
const dotenv = require("dotenv"); //importa variables de ambiente

dotenv.config();
const  { notFound, errorHandler } = require("./lib/middlewares/error.middleware")
const app = express(); 

const port = process.env.PORT || 3030;
require("./lib/mongoose");
//Import routes (Instead multiple imports, a single index file is created)
// const blogRouter = require("./routes/blog-route")
// const postRouter = require("./routes/post-route")
// const commentRouter = require("./routes/comment-route")

// json
app.use(bodyParser.json());
// www-form-urlenconded
app.use(bodyParser.urlencoded({extended:false}));

app
.get("/", (req, res) => res.send('Hola Mundo'))
.get("/welcome", (req, res) => res.send('<h1>Welcome to my app</h1>'));

require("./routes/main-routes")(app);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port} 🔥`) );

