const url = require('url')

const { findAll, findById, createBlog } = require("../services/blog-service")

const genericResponse  = {data:{}};

//Receives queryParams
exports.findAll = async (req, res, next ) => {

    try {
        const {username} = url.parse(req.url, true ).query;
        const blogs = await findAll(username);
        // genericResponse.data.blogs=blogs;
        const response = Object.assign( {}, genericResponse, {data: {blogs}});
        res.status(200).json(response).end();
    } catch (error) {
        next(error);
    }
    
}
//Function that receives params as URL path
exports.findById = async (req, res, next ) => {
    try {
        const { id } = req.params;  
        const blog = await findById(id);
        //genericResponse.data.blog = blog;
        const response = Object.assign( {}, genericResponse, {data: {blog}});
        res.status(200).json(response).end();
    } catch (error) {
        next(error);
    }
} 

exports.createBlog = async (req, res, next) => {
    try {
        const { body } = req;
        const newBlog = await createBlog(body);
        //genericResponse.data.newBlog =newBlog;
        const response = Object.assign( {}, genericResponse, {data: {newBlog}});
        res.status(200).json(response).end();
    } catch (error) {
        next(error);
    }
     
};