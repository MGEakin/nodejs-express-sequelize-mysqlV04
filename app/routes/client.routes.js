module.exports = app => {
    const clients = require("../controllers/client.controller.js");

    var router = require("express").Router();

    // Create a new client
    router.post("/", clients.create);

    // Retrieve all clients
    router.get("/", clients.findAll);

    // Retrieve a single client with id
    router.get("/:id", clients.findOne);

    // Update a client with id
    router.put("/:id", clients.update);

    // Delete a client with id
    router.delete("/:id", clients.delete);

    // Delete all clients
    router.delete("/", clients.deleteAll);

    app.use('/api/clients', router);
};
