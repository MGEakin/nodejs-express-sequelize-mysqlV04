module.exports = app => {
    const statuses = require("../controllers/status.controller.js");

    var router = require("express").Router();

    // Create a new status
    router.post("/", statuses.create);

    // Retrieve all statuses
    router.get("/", statuses.findAll);

    // Retrieve all published statuses
    router.get("/published", statuses.findAllPublished);

    // Retrieve a single status with id
    router.get("/:id", statuses.findOne);

    // Update a status with id
    router.put("/:id", statuses.update);

    // Delete a status with id
    router.delete("/:id", statuses.delete);

    // Delete all statuses
    router.delete("/", statuses.deleteAll);

    app.use('/api/statuses', router);
};
