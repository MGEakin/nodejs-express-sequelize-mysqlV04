module.exports = (sequelize, Sequelize) => {
    const Assignment = sequelize.define("assignment", {
        title: {
            type: Sequelize.STRING
        },
        startDate: {
            type: Sequelize.DATE
        },
        endDate: {
            type: Sequelize.DATE
        },
        rate: {
            type: Sequelize.INTEGER
        },
        clientId: {
            type: Sequelize.INTEGER
        },
        roleId: {
            type: Sequelize.INTEGER
        },
        userId: {
            type: Sequelize.INTEGER
        }
    });

    return Assignment;
};
