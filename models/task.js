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
    });

    Task.associate = (models) => {
        Task.belongsToMany(models.Permission, {
            as: 'permissions',
            through: models.TaskPermission
        });
    };

    return Task;
};