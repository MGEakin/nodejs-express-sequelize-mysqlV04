module.exports = app => {
    const roles = require("../controllers/role.controller.js");

    var roleRouter = require("express").Router();

    // Create a new role
    roleRouter.post("/", roles.create);

    // Retrieve all roles
    roleRouter.get("/", roles.findAll);

    // Retrieve a single role with id
    roleRouter.get("/:id", roles.findOne);

    // Update a role with id
    roleRouter.put("/:id", roles.update);

    // Delete a role with id
    roleRouter.delete("/:id", roles.delete);

    // Delete all roles
    roleRouter.delete("/", roles.deleteAll);

    app.use('/api/roles', roleRouter);
};
