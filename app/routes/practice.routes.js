module.exports = app => {
    const practices = require("../controllers/practice.controller.js");

    var practiceRouter = require("express").Router();

    // Create a new practice
    practiceRouter.post("/", practices.create);

    // Retrieve all practices
    practiceRouter.get("/", practices.findAll);

    // Retrieve a single practice with id
    practiceRouter.get("/:id", practices.findOne);

    // Update a practice with id
    practiceRouter.put("/:id", practices.update);

    // Delete a practice with id
    practiceRouter.delete("/:id", practices.delete);

    // Delete all practices
    practiceRouter.delete("/", practices.deleteAll);

    app.use('/api/practices', practiceRouter);
};
