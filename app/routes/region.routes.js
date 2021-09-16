module.exports = app => {
    const regions = require("../controllers/region.controller.js");

    var router = require("express").Router();

    // Create a new region
    router.post("/", regions.create);

    // Retrieve all regions
    router.get("/", regions.findAll);

    // Retrieve a single region with id
    router.get("/:id", regions.findOne);

    // Update a region with id
    router.put("/:id", regions.update);

    // Delete a region with id
    router.delete("/:id", regions.delete);

    // Delete all regions
    router.delete("/", regions.deleteAll);

    app.use('/api/regions', router);
};
