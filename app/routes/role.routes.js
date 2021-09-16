module.exports = app => {
    const roles = require("../controllers/role.controller.js");

    var router = require("express").Router();

    // Create a new role
    router.post("/", roles.create);

    // Retrieve all roles
    router.get("/", roles.findAll);

    // Retrieve a single role with id
    router.get("/:id", roles.findOne);

    // Update a role with id
    router.put("/:id", roles.update);

    // Delete a role with id
    router.delete("/:id", roles.delete);

    // Delete all roles
    router.delete("/", roles.deleteAll);

    app.use('/api/roles', router);
};
