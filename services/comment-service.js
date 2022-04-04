const { comments } = require('../models/comment-model')

exports.findAll = () => {
    return comments;
}