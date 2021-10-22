const assignments = require("../controllers/assignment.controller.js");
module.exports = app => {
    const assignments = require("../controllers/assignment.controller.js");

    var router = require("express").Router();

    // Create a new assignment
    router.post("/", assignments.create);

    // Retrieve all assignments
    router.get("/", assignments.findAll);

    // Retrieve all assignments by client
    router.get("/assignments/clientId/:clientId", assignments.findByClient);
    // router.get("/clientId/:clientId", async (req, res, next) => {
    //     try {
    //         const data = await assignments.query();
    //         res.json(data.rows);
    //     } catch (err) {
    //         return next(err);
    //     }
    // });
    // Retrieve a single assignment with id
    router.get("/:id", assignments.findOne);

    // Update a assignment with id
    router.put("/:id", assignments.update);

    // Delete a assignment with id
    router.delete("/:id", assignments.delete);

    // Delete all assignments
    router.delete("/", assignments.deleteAll);

    app.use('/api/assignments', router);
};
