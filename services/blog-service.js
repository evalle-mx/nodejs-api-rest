const BlogModel = require('../models/blog-model')
const { mergeBlog } = require('../lib/utils')

//Setting a Standard on the response
// const genericResponse  = {data:{}};

//Receives queryParams
//exports.findAll = (req, res ) => {
exports.findAll = async (username ) => {
    // genericResponse.data = blogs;
    // if(username){
    //     genericResponse.data = blogs.filter( blog => blog.username === username); 
    // }
    // return genericResponse;
    try {
        /*throw Error('Prueba_Error: Simulamos un error ')*/
        //return await BlogModel.find({username}).exec(); //Regresa Blog con atributos, pero objetos en arreglo solo el ID (Lazy)
        return await BlogModel.find({username}).populate('posts').exec(); //Carga atributos de arreglo posts (Eager)
    } catch (error) {
        throw error;
    }
}
//Function that receives params as URL path
// exports.findById = (req, res ) => {
exports.findById = async ( id ) => {    
    // const blog = blogs.find( blog => blog.id === Number(id) ); //Convert in same type
    // genericResponse.data = blog;
    // return genericResponse;
    try {
        //return await BlogModel.findById(id).exec();//Regresa Blog con atributos, pero objetos en arreglo solo el ID/
        return await BlogModel.findById(id).populate('posts').exec();//Carga atributos de arreglo posts (Eager)
    } catch (error) {
        throw error;
    }
} 
// exports.createBlog = ( blogInfo ) => {
//     // const newBlog = {  id: blogs.length+1, title=blogInfo.title, username=blogInfo.username }
//     const newBlog = {
//         id: blogs.length+1,
//         ...blogInfo
//     }
//     console.log('Adding new blog: ', newBlog );
//     blogs.push(newBlog);
//     genericResponse.data = newBlog;
//     return genericResponse;
// }
exports.createBlog = async ( blogInfo ) => {
    try {
        //usando schema, se omiten atributos no declarados (i.e username)
        const newBlog = new BlogModel({
            ...blogInfo
        })
        console.log('Adding new blog: ', newBlog );
        // const savedBlog = await newBlog.save();
        // genericResponse.data = {
        //     ...savedBlog._doc,
        //     _id: savedBlog.id
        // };
        // return genericResponse;
        return await newBlog.save();
    } catch (error) {
        throw error;
    }
}

exports.updateBlog = async (blogId, blogInfo)  => {
    try {
        const blog = await BlogModel.findById(blogId).exec();
        const blogPrepared = mergeBlog(blogInfo, blog ); //prepareModelForUpdate
        return await blogPrepared.save();
    } catch (error) {
        throw error;
    }
}

//Funcion interna que se llama desde post-service al crear Post
exports.addPost = async (blogId, post )=> {
    try {
        const blog =  await BlogModel.findById(blogId).exec();
        blog.posts.push(post)
        await blog.save();
    } catch (error) {
        throw error;
    }
}