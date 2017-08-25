module.exports = (sequelize, DataTypes) => sequelize.define('UserTask', {
    id: {
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID
    },
    taskId: {
        type: DataTypes.UUID
    },
    userId: {
        type: DataTypes.UUID
    }
});