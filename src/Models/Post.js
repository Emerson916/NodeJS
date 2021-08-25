const { Model, STRING } = require("sequelize");


class Post extends Model {

    static init(connetion) {
        super.init(
            {
                title: STRING,
                description: STRING,
                image: STRING,
                gist: STRING
            },
            {
                sequelize : connetion,
            }
        )
    }

    static associate(models) {
        this.belongsTo(models.User)
    }
}

module.exports = Post;