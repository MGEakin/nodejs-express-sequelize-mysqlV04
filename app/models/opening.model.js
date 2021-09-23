module.exports = (sequelize, Sequelize) => {
    const Opening = sequelize.define("opening", {
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
        }
    });

    return Opening;
};
