module.exports = app => {
    const practices = require("../controllers/practice.controller.js");

    var router = require("express").Router();

    // Create a new practice
    router.post("/", practices.create);

    // Retrieve all practices
    router.get("/", practices.findAll);

    // Retrieve a single practice with id
    router.get("/:id", practices.findOne);

    // Update a practice with id
    router.put("/:id", practices.update);

    // Delete a practice with id
    router.delete("/:id", practices.delete);

    // Delete all practices
    router.delete("/", practices.deleteAll);

    app.use('/api/practices', router);
};
