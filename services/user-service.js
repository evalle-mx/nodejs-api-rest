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
        throw new Error('Informacion invalida'); //Para evitar enviar informacion sensible que pueda ser hackeada
    }
}