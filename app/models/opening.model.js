module.exports = (sequelize, Sequelize) => {
    const Opening = sequelize.define("opening", {
        title: {
            type: Sequelize.STRING
        },
        startDate: {
            type: Sequelize.DATE
        },
        rate: {
            type: Sequelize.INTEGER
        },
        client: {
            type: Sequelize.STRING
        }
    });

    return Opening;
};
