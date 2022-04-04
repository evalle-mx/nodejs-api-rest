const mongoose = require("mongoose");
const { Schema } = mongoose;

//Define la estructura del objeto que se va a crear en MongoDB, otros atributos son descartados
const BlogSchema = new Schema ({
    title: {
        type: String, required:true
    },
    posts: [{
        type:Schema.Types.ObjectId,
        ref: 'Post'
    }]
},
{
    timestamps:{
        createdAt:'createdAt', updatedAt:'updatedAt'
    }
}
)

module.exports = mongoose.model('Blog', BlogSchema);
// const blogs = [
// exports.blogs = [
//     {id:1, title: "Blog 1", username:"admin"},
//     {id:2, title: "Blog 2", username:"admin"},
//     {id:3, title: "Blog Poncho", username:"poncho"}
// ];