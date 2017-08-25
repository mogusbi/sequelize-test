const express = require('express');
const connection = require('./connection');
const seed = {
    permissions: require('./seed/permissions'),
    taskPermissions: require('./seed/task-permissions'),
    tasks: require('./seed/tasks'),
    userTasks: require('./seed/user-tasks'),
    users: require('./seed/users')
};

connection()
    .sequelize
    .sync({
        force: true
    })
    .then(
        () => Promise.all([
            connection().Permission.bulkCreate(seed.permissions),
            connection().Task.bulkCreate(seed.tasks)
        ])
    )
    .then(
        () => Promise.all([
            connection().User.bulkCreate(seed.users, {
                individualHooks: true,
                validate: true
            })
        ])
    )
    .then(
        () => Promise.all([
            connection().TaskPermission.bulkCreate(seed.taskPermissions),
            connection().UserTask.bulkCreate(seed.userTasks),
        ])
    )
    .then(
        () => {
            const app = new express();

            app.listen('8080', () => console.log('Server started on port 8080'));
        }
    )
    .catch(
        (err) => console.error(err.message)
    );