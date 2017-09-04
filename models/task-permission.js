module.exports = (sequelize, DataTypes) => sequelize.define('TaskPermission', {
    id: {
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID
    },
    permissionId: {
        type: DataTypes.UUID,
        unique: 'task_permission_user_key'
    },
    taskId: {
        type: DataTypes.UUID,
        unique: 'task_permission_user_key'
    },
    userId: {
        type: DataTypes.UUID,
        unique: 'task_permission_user_key'
    }
}, {
    freezeTableName: true,
    timestamps: false
});