/*exports.posts = [
    { id:1, title:"Post estatico Principal", content:"Contenido principal", blogId:1 },
    { id:2, title:"Post estatico Secundario", content:"Contenido del segundo Post", blogId:2 }
]; */

const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema ({
    title: { type: String, required:true},
    content: String,
    blog: { 
        type: Schema.Types.ObjectId,
        ref: 'Blog'
    }
});

module.exports = mongoose.model('Post', PostSchema );
