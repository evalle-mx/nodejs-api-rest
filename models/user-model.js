const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        firstName:String,
        lastName:String,
        email: {
            type:String,
            unique:true,
            required:true,
            trime:true,
            lowercase:true
        },
        password:{
            type:String,
            required:true
        }
    },
    {
        timestamps:{
            createdAt:'createdAt',
            updatedAt:'updatedAt'
        }
    }
);

//El siguiente metodo elimina la contrasena de la respuesta
UserSchema.methods.toJSON = function() {
    const user = this;
    return {
        ...user._doc,
        password:undefined
    }
}

//Declara funcion PREvia al evento salvar, 
UserSchema.pre('save', async function(next){
    const user = this;
    if(user.isModified('password')){
        const {password} = user;
        user.password = await bcrypt.hash(password, 8); //# de salt rounds
    }
    next()
})

module.exports = mongoose.model('User', UserSchema);
/* trime, elimina espacios al inicio y fin, lowercase: transforma en minusculas para evitar duplicidad.
 */