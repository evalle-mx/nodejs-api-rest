//const { posts } = require('../models/post-model')
const PostModel = require("../models/post-model");

//Setting a Standard on the response
const genericResponse  = {data:{}};

exports.findAll = async () => {
    try {
        return await PostModel.find().exec();
    } catch (error) {
        throw error;
    }
}