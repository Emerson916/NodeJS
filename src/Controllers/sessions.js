const User = require("../Models/User");
const jwt = require("jsonwebtoken");
const auth = require("../config/auth")

module.exports ={

    //STORE - Método que vai ficar responsavel pela inserção

    store(req,res){
        async const { email, password } = req.body;

        // verificar se o úsuario existe
        // Estou preocurando um usuario onde o email é igual ao email cadastrado
        const user = await User.findOne({
            where: {
                email : email
            }
        })

        // se a senha está correta
        // Se o usuário/email estiver errado, retornar um status de erro
        if(!User || user.password !== password){ 
            return res.status(403).send({ error: "Usuário e/ou senha inválidos"});

        }
        // gerar um token
        const token =
        jwt.sign({ userId : user.id},
            "auth.secret",{

            expiresIn: "1h"
        });

        //enviar respostas
        // login do usuário
        res.send({
            user: {
                ra: user.ra,
                email: user.email,
                name: user.name
            },
            token
        })

    }
}