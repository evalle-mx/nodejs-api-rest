const genericResponse = {
    data: {}
}

exports.prepareResponse = (data, key )=> Object.assign({}, genericResponse, {data: {[key]:data}})

exports.isValidUpdate = (updates, allowedUpdates) => updates.every(field => allowedUpdates.includes(field)); //Evalua cada elemento, si se encuentra incluido

exports.mergeBlog = (newBlog, model) =>{     //prepareModelForUpdate
    const updates = Object.keys(newBlog);//obtiene atributos
    updates.forEach(field => {
        model[field] = newBlog[field];
    })
    return model;
}   