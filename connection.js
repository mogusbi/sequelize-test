const {readdirSync} = require('fs');
const {join} = require('path');
const Sequelize = require('sequelize');

module.exports = () => {
    const db = {};
    const sequelize = new Sequelize('postgres://user:password@localhost:5432/sequelize-test');
    const modelDir = join(__dirname, 'models');

    readdirSync(modelDir)
        .filter(
            (file) => (file.indexOf('.') !== 0) && (file !== 'index.js')
        )
        .forEach(
            (file) => {
                const model = sequelize.import(join(modelDir, file));

                db[model.name] = model;
            }
        );

    Object
        .keys(db)
        .forEach(
            (modelName) => {
                if ('associate' in db[modelName]) {
                    db[modelName].associate(db);
                }
            }
        );

    db.sequelize = sequelize;
    db.Sequelize = Sequelize;

    return db;
};