const jwt = require("jsonwebtoken");
const auth = require("../config/auth");

//Verifica os tokens
module.exports = (req, res, next) => {

    //Pegar o token no cabeçalho
    const authorization = req.headers.authorization;

    //verificar se o token veio
    if (!authorization){
        return res.status(401).send({
            error: "Token não informado"
        })
    }


    //separar o prefixo do token
    //desestruturação
    const [prefixo, token] = authorization.split(" ");

    //verificar se o token é válido

    try {
        //se token válido recebemos o payload
        console.log(token)
        const payload = jwt.verify(token, auth.secret);

        //colocamos o id do usuário na requisição
        //para que o controller possa recuperar
        req.userId = payload.userId;    

        return next();

    } catch (error) {
        console.log(error)
        //Retornamos token inválido
        res.status(401).send({ error: "Token inválido"});
    }

    

}
