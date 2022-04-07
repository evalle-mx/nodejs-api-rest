const jwt = require('jsonwebtoken')
const UserModel = require('../../models/user-model')

//exporta una nueva funcion (global)
exports.restrict = async (req, res, next )=> {
    try {
        const hToken = req.header('Authorization');
        console.log('hToken:: ', hToken );
        if(!hToken){
            throw new Error('Token no valido (vacio)');
        }
        const pureToken = hToken.replace('Bearer ', '');
        console.log(`pureToken: >${pureToken}<`);
        const data = jwt.verify(pureToken, process.env.SECRET_KEY);
        console.log('data: ', data );
        const user = await UserModel.findById(data._id);

        if(!user || data.exp !== user.expirationDate ){
            throw new Error('Sesion expirada') //Not user
        }

        req.currentUser = user;
        next();
    } catch (err) {
        console.error(err);
        res.status(401);
        const error = new Error(err.message);
        next(error);
    }
}