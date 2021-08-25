const { Model, DataTypes } = require("sequelize");


class User extends Model{
    static init(connetion) {
        super.init(
            {
                name: DataTypes.STRING,
                email: DataTypes.STRING,
                password: DataTypes.STRING,
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
