var jwt = require('jsonwebtoken');
exports.TokenIssue = (req, res)=>{
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