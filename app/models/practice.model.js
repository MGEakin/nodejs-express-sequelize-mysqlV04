module.exports = (sequelize, Sequelize) => {
    const Practice = sequelize.define("practice", {
        name: {
            type: Sequelize.STRING
        }
    });

    return Practice;
};
