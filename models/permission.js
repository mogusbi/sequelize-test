module.exports = (sequelize, DataTypes) => sequelize.define('Permission', {
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