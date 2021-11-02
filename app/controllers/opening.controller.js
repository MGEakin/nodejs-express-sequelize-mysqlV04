const db = require("../models");
const Opening = db.openings;
const Op = db.Sequelize.Op;

// Create and Save a new Opening
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "openings Content can not be empty!"
        });
        return;
    }

    // Create a Opening
    const opening = {
        title: req.body.title
    };

    // Save Opening in the database
    Opening.create(opening)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Opening."
            });
        });
};

// Retrieve all Openings from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    let condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Opening.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Openings."
            });
        });
};

// Find a single Opening with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Opening.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Opening with id=" + id
            });
        });
};

// Update a Opening by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Opening.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Opening was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Opening with id=${id}. Maybe Opening was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Opening with id=" + id
            });
        });
};

// Delete a Opening with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Opening.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Opening was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Opening with id=${id}. Maybe Opening was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Opening with id=" + id
            });
        });
};

// Delete all Openings from the database.
exports.deleteAll = (req, res) => {
    Opening.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Openings were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Openings."
            });
        });
};

// Find all published Openings
exports.findAllPublished = (req, res) => {
    Opening.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Openings."
            });
        });
};
