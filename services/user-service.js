const bcrypt = require('bcrypt');
const UserModel = require('../models/user-model');

exports.signUp = async (userInfo) => {
    try {
        const newUser = new UserModel ({
            ...userInfo
        });
        const savedUser = await newUser.save();
        return savedUser;
    } catch (error) {
        console.error(error);
        throw new Error('Informacion invalida'); //Para evitar enviar informacion sensible que pueda exponer vulnerabilidad
    }
}

exports.signIn = async({email, password }) => {
    try {
        const user = await UserModel.findOne( {email}).exec();     //( {email: email}).exec();
        const matchPassword = await bcrypt.compare(password, user.password );

        if(!matchPassword){
            throw new Error('Usuario y/o Contrasena invalido')
        }
        const token = await user.generateAuthToken();
        return {token, user: {...user.toJSON()} }
    } catch (error) {
        console.error(error);
        throw new Error('Datos invalidos'); //Para evitar enviar informacion sensible que pueda ser hackeada
    }
}