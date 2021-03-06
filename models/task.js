module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
        id: {
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            type: DataTypes.UUID
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });

    Task.associate = (models) => {
        Task.belongsToMany(models.Permission, {
            as: 'permissions',
            constraints: false,
            foreignKey: 'taskId',
            through: {
                model: models.TaskPermission,
                unique: false
            }
        });
    };

    return Task;
};