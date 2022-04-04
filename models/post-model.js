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
