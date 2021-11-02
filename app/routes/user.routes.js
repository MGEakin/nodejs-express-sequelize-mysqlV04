module.exports = app => {
    const users = require("../controllers/user.controller.js");

    var userRouter = require("express").Router();

    // Create a new user
    userRouter.post("/", users.create);

    // Retrieve all users
    userRouter.get("/", users.findAll);

    // Retrieve a single user with id
    userRouter.get("/:id", users.findOne);

    // Update a user with id
    userRouter.put("/:id", users.update);

    // Delete a user with id
    userRouter.delete("/:id", users.delete);

    // Delete all users
    userRouter.delete("/", users.deleteAll);

    app.use('/api/users', userRouter);
};
