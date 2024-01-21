const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
        },
        expirationDate : {
            type: Number,
            required: true,
            default: new Date().getTime() / 1000
        }
    },
    {
        timestamps:{
            createdAt:'createdAt',
            updatedAt:'updatedAt'
        }
    }
);

//El siguiente metodo personalizado elimina la contrasena de la respuesta
UserSchema.methods.toJSON = function() {
    const user = this;
    return {
        ...user._doc,
        password:undefined,
        expirationDate:undefined
    }
}
//Metodo para generar el token de autorizacion
UserSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({_id:user._id}, process.env.SECRET_KEY, { expiresIn:'4 hours' })
    const infoDecoded = jwt.decode(token);
    user.expirationDate = infoDecoded.exp;
    await user.save()
    return token;
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