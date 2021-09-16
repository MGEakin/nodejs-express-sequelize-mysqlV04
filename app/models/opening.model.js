module.exports = (sequelize, Sequelize) => {
    const Opening = sequelize.define("opening", {
        title: {
            type: Sequelize.STRING
        }
    });

    return Opening;
};
