const { Model, DataTypes } = require("sequelize");


class User extends Model{
    static init(connetion) {
        super.init(
            {
                name: STRING,
                email: STRING,
                password: STRING,
            },
            {
                sequelize : connetion,
            }
        )
    }

    static associate(models) {
        this.hasMany(models.Post);
    }
    
}

module.exports = User;
