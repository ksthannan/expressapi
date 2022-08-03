const jwt = require('jsonwebtoken');
exports.CreateToken = (req, res)=>{
    let Payload = {
        name: "M A Hannan",
        roll: 12,
        mobile: "01960945473"
    }
    let Token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: Payload
      }, 'gduyijsdjhfghtrydfgdg');
    res.send(Token)
}

exports.DecodeToken = (req, res)=>{
    let TokenKey = req.headers['token-key']
    jwt.verify(TokenKey, 'gduyijsdjhfghtrydfgdg', (err, decoded)=>{
        if(err){
            res.status(401).json({status: "Invalid token", data: err})
        }else{
            res.status(200).json({status: "Success", data: decoded})
        }
});

    
    res.send(Token)
}
