const url = require('url');
const { update } = require('../models/blog-model');
const { findAll, findById, createBlog, updateBlog } = require('../services/blog-service')
const { prepareResponse } = require('../lib/utils')

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

exports.updateBlog = async(req, res, next ) => {
    try {
        const {body, params: {id}} = req;
        const blogUpdated = await updateBlog(id, body);
        const response = prepareResponse( blogUpdated, 'blogUpdated' );
        res.status(200).json(response).end();
    } catch (err) {
        next(err)
    }
}