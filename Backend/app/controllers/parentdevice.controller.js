const db = require("../parentdevicemodel");
const Parentdevice = db.parentdevices;

// Create and Save a new Parentdevice
exports.create = (req, res) => {
  // Validate request
  

  // Create a Parentdevice
  const parentdevice = new Parentdevice({
    latitude: req.body.latitude,
    longitude: req.body.longitude,
areaname: req.body.parentdeviceid,
blognumber: req.body.available,
totalavailable : req.body.type

    
  });

  // Save Parentdevice in the database
  parentdevice
    .save(parentdevice)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Parentdevice."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Parentdevice.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving parentdevices."
      });
    });
};

// Find a single Parentdevice with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Parentdevice.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Parentdevice with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Parentdevice with id=" + id });
    });
};
// findby email
exports.findbyemail = (req, res) => {
  const email = req.params.email;
 Parentdevice.find({ email: email })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving parentdevices."
      });
    });


};


// Update a Parentdevice by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Parentdevice.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Parentdevice with id=${id}. Maybe Parentdevice was not found!`
        });
      } else res.send({ message: "Parentdevice was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Parentdevice with id=" + id
      });
    });
};

// Delete a Parentdevice with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Parentdevice.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Parentdevice with id=${id}. Maybe Parentdevice was not found!`
        });
      } else {
        res.send({
          message: "Parentdevice was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Parentdevice with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Parentdevice.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Tutorials were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all parentdevices."
      });
    });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Parentdevice.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving parentdevices."
      });
    });
};
