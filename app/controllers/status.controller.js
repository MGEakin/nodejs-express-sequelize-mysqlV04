const db = require("../models");
const Status = db.statuses;
const Op = db.Sequelize.Op;

// Create and Save a new Status
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Status
    const status = {
        title: req.body.title
    };

    // Save Status in the database
    Status.create(status)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Status."
            });
        });
};

// Retrieve all Statuses from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    let condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Status.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving statuses."
            });
        });
};

// Find a single Status with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Status.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Status with id=" + id
            });
        });
};

// Update a Status by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Status.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Status was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Status with id=${id}. Maybe Status was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Status with id=" + id
            });
        });
};

// Delete a Status with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Status.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Status was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Status with id=${id}. Maybe Status was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Status with id=" + id
            });
        });
};

// Delete all Statuses from the database.
exports.deleteAll = (req, res) => {
    Status.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Statuses were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all statuses."
            });
        });
};

// Find all published Statuses
exports.findAllPublished = (req, res) => {
    Status.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving statuses."
            });
        });
};
