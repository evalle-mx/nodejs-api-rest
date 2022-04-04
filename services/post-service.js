const PostModel = require("../models/post-model");
//Importa el servicio para consumirlo en este otro servicio
const BlogService = require('../services/blog-service')

exports.findAll = async () => {
    try {
        return await PostModel.find().exec(); //Lazy
        // return await PostModel.find().populate('blog').exec(); //Eager
    } catch (error) {
        throw error;
    }
}

exports.createPost = async (postInfo ) => {
    try {
        const blog = await BlogService.findById(postInfo.blog);
        //Si no existe blog, regresa un error
        if(!blog) throw { message: 'Blog not Found in DB', status:404 };
        const post = new PostModel({...postInfo });
        const savedPost = await post.save();
        await BlogService.addPost(postInfo.blog, savedPost );
        return savedPost;
    } catch (error) {
        throw error;
    }
}