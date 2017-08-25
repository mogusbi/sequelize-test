module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        emailAddress: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true,
            validate: {
                notEmpty: true,
                isEmail: true
            }
        },
        id: {
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            type: DataTypes.UUID
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        username: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true,
            validate: {
                notEmpty: true
            }
        }
    });

    User.associate = (models) => {
        User.belongsToMany(models.Permission, {
            as: 'permissions',
            through: models.TaskPermission
        });

        User.belongsToMany(models.Task, {
            as: 'tasks',
            through: models.UserTask
        })
    };

    return User;
};