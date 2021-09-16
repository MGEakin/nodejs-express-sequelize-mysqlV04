module.exports = (sequelize, Sequelize) => {
    const Assignment = sequelize.define("assignment", {
        title: {
            type: Sequelize.STRING
        }
    });

    return Assignment;
};
