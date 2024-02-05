const db = require("../Models");
const Credit = db.credit;
const Op = db.Sequelize.Op;
const util = require("../Utils/utils.js").auth;



// Create and Save a new Credit
exports.create = async (req, res) => {
  
  // Create a Credit
  const credit = {
    
      name:(req.body.name)
    
  };

  // Save Credit in the database
  Credit.create(credit)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Credit."
      });
    });
};


// Find a single Credit with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Credit.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Credit with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Credit with id=" + id
      });
    });
};

// Update a Credit by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Credit.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Credit was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Credit with id=${id}. Maybe Credit was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Credit with id=" + id
      });
    });
};

// Delete a Credit with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Credit.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Credit was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Credit with id=${id}. Maybe Credit was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Credit with id=" + id
      });
    });
};

// Delete all Credit from the database.
exports.deleteAll = (req, res) => {
  Credit.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Credit were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Credit."
      });
    });
};

// find all  Credit
exports.findAllPublished = (req, res) => {
  Credit.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Credit."
      });
    });
};