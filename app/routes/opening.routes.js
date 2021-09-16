module.exports = app => {
    const openings = require("../controllers/opening.controller.js");

    var router = require("express").Router();

    // Create a new opening
    router.post("/", openings.create);

    // Retrieve all openings
    router.get("/", openings.findAll);

    // Retrieve a single opening with id
    router.get("/:id", openings.findOne);

    // Update a opening with id
    router.put("/:id", openings.update);

    // Delete a opening with id
    router.delete("/:id", openings.delete);

    // Delete all openings
    router.delete("/", openings.deleteAll);

    app.use('/api/openings', router);
};
