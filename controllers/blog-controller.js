const url = require('url')

/* => Moved to blog-model.js 
const blogs = [
    {id:1, title: "Blog 1", username:"admin"},
    {id:2, title: "Blog 2", username:"admin"},
    {id:3, title: "Blog Poncho", username:"poncho"}
];  // */
const { findAll, findById } = require("../services/blog-service")

/* Moved to blog-services.js 
//Setting a Standard on the response
const genericResponse  = {data:{}}; */

//Receives queryParams
exports.findAll = (req, res ) => {
    // return res.status(200).json({
    //     items:blogs
    // }).end()
    /* Moved to blog-services.js  
    genericResponse.data = blogs;
    //a) implementing filter to view queryParams:
    // const filter = url.parse(req.url, true ).query;
    // console.log(filter);
    // b) implementing params
    
    if(username){
        genericResponse.data = blogs.filter( blog => blog.username === username); 
    }
    return res.status(200).json(genericResponse).end(); //*/
    const {username} = url.parse(req.url, true ).query;
    const response = findAll(username);
    return res.status(200).json(response).end();
}
//Function that receives params as URL path
exports.findById = (req, res ) => {
    // return res.status(200).json({
    //     items:blogs
    // }).end()
    const { id } = req.params;
    /* Moved to blog-services.js  
    const blog = blogs.find( blog => blog.id === Number(id) ); //Convert in same type
    genericResponse.data = blog;
    return res.status(200).json(genericResponse).end();*/
    const blog = findById(id);
    return res.status(200).json(blog).end();
}  