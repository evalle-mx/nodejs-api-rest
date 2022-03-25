const { blogs } = require('../models/blog-model')

//Setting a Standard on the response
const genericResponse  = {data:{}};

//Receives queryParams
//exports.findAll = (req, res ) => {
exports.findAll = (username ) => {
    genericResponse.data = blogs;    
    if(username){
        genericResponse.data = blogs.filter( blog => blog.username === username); 
    }
    //return res.status(200).json(genericResponse).end();
    return genericResponse;
}
//Function that receives params as URL path
// exports.findById = (req, res ) => {
exports.findById = ( id ) => {    
    const blog = blogs.find( blog => blog.id === Number(id) ); //Convert in same type
    genericResponse.data = blog;
    //return res.status(200).json(genericResponse).end();
    return genericResponse;
} 