const mongoose = require("mongoose");
const { Schema } = mongoose;
const { isValidUpdate } = require('../lib/utils')

//Define la estructura del objeto que se va a crear en MongoDB, otros atributos son descartados
const BlogSchema = new Schema ({
    title: {
        type: String, required:true
    },
    posts: [{
        type:Schema.Types.ObjectId,
        ref: 'Post'
    }]
},
{
    timestamps:{
        createdAt:'createdAt', updatedAt:'updatedAt'
    }
}
)

BlogSchema.pre('save', function(next){
    const blog = this;
    if(blog.isNew){
        next()
    }
    else {
        //Limita los atributos (fields) a actualizar
        const allowedUpdates = ['title', 'updatedAt'];
        const updates = blog.modifiedPaths();
        const isValid = isValidUpdate(updates, allowedUpdates); //fn en utils
        next(!isValid? new Error('Actualizacion no permitida, verifique los campos'): undefined );  //next(undefined) == next()
    }
})

module.exports = mongoose.model('Blog', BlogSchema);
