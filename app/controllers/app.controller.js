const App = require("../model/app.model.js");

// Create and Save a new Message
exports.create = (req, res) => {
  const item = new App({
    title: req.body.title,
    description: req.body.description,
    qty: req.body.qty,
    addDate: req.body.addDate || new Date(),
    voidDate: req.body.voidDate || null,
    rating: req.body.rating || 3,
    tags: req.body.tags || [],
  });
  item
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Message.",
      });
    });
};

// Retrieve all items from the database.
exports.findAll = (req, res) => {
  App.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving items.",
      });
    });
};

// Find a single message with a id
exports.findOne = (req, res) => {
  App.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "items not found with id " + req.params.id,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "items not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Error retrieving items with id " + req.params.id,
      });
    });
};

// Update an item identified by the itemId in the request
exports.update = (req, res) => {
  App.findByIdAndUpdate(
    req.params.id,
    {
      message: req.body.message,
    },
    { new: true }
  )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Item not found with id " + req.params.id,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Item not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Error updating item with id " + req.params.id,
      });
    });
};

// Delete a message with the specified id in the request
exports.delete = (req, res) => {
  App.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Item not found with id " + req.params.id,
        });
      }
      res.send({ message: "Item deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Item not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Could not delete item with id " + req.params.id,
      });
    });
};