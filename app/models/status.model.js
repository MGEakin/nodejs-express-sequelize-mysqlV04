module.exports = (sequelize, Sequelize) => {
    const Status = sequelize.define("status", {
        title: {
            type: Sequelize.STRING

        }
    });

    return Status;
};
