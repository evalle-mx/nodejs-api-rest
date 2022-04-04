const PostService = require("../services/post-service")

const genericResponse  = {data:{}};

exports.findAll = async (req, res, next ) => {
    try {
        const posts = await PostService.findAll();
        const response = Object.assign( {}, genericResponse, {data: {posts}});
        res.status(200).json(response).end();
    } catch (error) {
        next(error);
    }
}