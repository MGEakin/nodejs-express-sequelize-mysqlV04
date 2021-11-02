const db = require("../models");
const Practice = db.practices;
const Op = db.Sequelize.Op;

// Create and Save a new Practice
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "practices Content can not be empty!"
        });
        return;
    }

    // Create a Practice
    const practice = {
        name: req.body.name
    };

    // Save Practice in the database
    Practice.create(practice)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Practice."
            });
        });
};

// Retrieve all Practices from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    let condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

    Practice.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Practices."
            });
        });
};

// Find a single Practice with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Practice.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Practice with id=" + id
            });
        });
};

// Update a Practice by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Practice.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Practice was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Practice with id=${id}. Maybe Practice was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Practice with id=" + id
            });
        });
};

// Delete a Practice with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Practice.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Practice was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Practice with id=${id}. Maybe Practice was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Practice with id=" + id
            });
        });
};

// Delete all Practices from the database.
exports.deleteAll = (req, res) => {
    Practice.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Practices were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Practices."
            });
        });
};

// Find all published Practices
exports.findAllPublished = (req, res) => {
    Practice.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Practices."
            });
        });
};
