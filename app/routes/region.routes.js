module.exports = app => {
    const regions = require("../controllers/region.controller.js");

    var regionRouter = require("express").Router();

    // Create a new region
    regionRouter.post("/", regions.create);

    // Retrieve all regions
    regionRouter.get("/", regions.findAll);

    // Retrieve a single region with id
    regionRouter.get("/:id", regions.findOne);

    // Update a region with id
    regionRouter.put("/:id", regions.update);

    // Delete a region with id
    regionRouter.delete("/:id", regions.delete);

    // Delete all regions
    regionRouter.delete("/", regions.deleteAll);

    app.use('/api/regions', regionRouter);
};
