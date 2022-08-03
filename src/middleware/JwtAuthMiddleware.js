const jwt = require('jsonwebtoken');
exports.JwtAuthentication = (req, res, next)=>{
    let TokenKey = req.headers['token-key']
    jwt.verify(TokenKey, 'gduyijsdjhfghtrydfgdg', (err, decoded)=>{
        if(err){
            res.status(401).json({status: "Invalid token", data: err})
        }else{
            next()
        }
    });
}