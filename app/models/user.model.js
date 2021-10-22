module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        role: {
            type: Sequelize.INTEGER
        },
        practice: {
            type: Sequelize.INTEGER
        },
        region: {
            type: Sequelize.INTEGER
        }
    });

    return User;
};
