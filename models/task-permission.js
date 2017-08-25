module.exports = (sequelize, DataTypes) => sequelize.define('TaskPermission', {
    id: {
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID
    },
    permissionId: {
        type: DataTypes.UUID
    },
    taskId: {
        type: DataTypes.UUID
    },
    userId: {
        type: DataTypes.UUID
    }
});