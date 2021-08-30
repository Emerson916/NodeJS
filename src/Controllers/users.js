const User = require("../Models/User");
const bcrypt = require("bcryptjs");

module.exports = {
    async store(rerq, res) {
         const { name, email, password } = req.body;
        //verificar se o usuário já existe 
        let user = await User.findOne({
            where: {
                email : email
            }
        })

        // se o email já estiver sendo usado, não poderá criar um novo usuario com o mesmo email
        if (user) {
            return res.status(400)
                .send({ error: "Este e-mail já está sendo utilizado"})
        }

        // Gerando o hash da senha
        const passwordHashed = bcrypt.hashSync(password);

        //Inserir o usuário no banco de dados
        user = await User.create({
            name: name,
            email: email,
            password: password
        }) 

        //gerar um token 

        //retornar um usuário

        res.send({
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });
    }
}