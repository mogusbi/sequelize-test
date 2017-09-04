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
    }, {
        freezeTableName: true,
        timestamps: false
    });

    User.associate = (models) => {
        User.belongsToMany(models.Permission, {
            as: 'permissions',
            constraints: false,
            foreignKey: 'userId',
            through: {
                model: models.TaskPermission,
                unique: false
            }
        });

        User.belongsToMany(models.Task, {
            as: 'tasks',
            foreignKey: 'userId',
            through: models.UserTask
        });
    };

    return User;
};