exports.notFound = (req, res, next ) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error)
}

exports.errorHandler = (error, req, res, next) => {
    // si es un error, pero obtuvo respuesta, se cambia estatus 'Server internal Error'
    let statusCode;
    if(error.status){ //SI hay un error detectado en el servicio
        statusCode = error.status;
    }
    else {
        statusCode = res.statusCode === 200 ? 500:res.statusCode;
    }
    res.status(statusCode);
    //por defecto production si no es development 
    res.json({
        status:statusCode, message:error.message, 
        stack: process.env.NODE_ENV != 'development'? '🥞 Not-DEV environment Failure' : error.stack
    })

}