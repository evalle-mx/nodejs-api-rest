//const url = require('url') /* only for QueryParams */
const { findAll } = require("../services/comment-service")
const genericResponse  = {data:{}};

exports.findAll = (req, res ) => {
    const comments = findAll();
    const response = Object.assign( {}, genericResponse, {data: {comments}});
    return res.status(200).json(response).end();
}