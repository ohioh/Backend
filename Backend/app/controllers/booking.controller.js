const db = require("../bookingsmodel");
const Booking = db.bookings;

// Create and Save a new Booking
exports.create = (req, res) => {
  // Validate request
 /* if (!req.body.email) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }*/

  // Create a Booking
  const booking = new Booking({
    parentdeviceid: req.body.parentdeviceid,
      blogid: req.body.blogid,
userid: req.body.userid,
paymentstatus: req.body.paymentstatus,
parkingclass : req.body.parkingclass,
parkingduration: req.body.parkingduration,
parkingtime : req.body.parkingtime
    
  });

  // Save Booking in the database
  booking
    .save(booking)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Booking."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Booking.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving bookings."
      });
    });
};

// Find a single Booking with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Booking.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Booking with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Booking with id=" + id });
    });
};
// findby email
exports.findbyemail = (req, res) => {
  const email = req.params.email;
 Booking.find({ email: email })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving bookings."
      });
    });


};


// Update a Booking by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Booking.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Booking with id=${id}. Maybe Booking was not found!`
        });
      } else res.send({ message: "Booking was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Booking with id=" + id
      });
    });
};

// Delete a Booking with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Booking.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Booking with id=${id}. Maybe Booking was not found!`
        });
      } else {
        res.send({
          message: "Booking was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Booking with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Booking.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Tutorials were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all bookings."
      });
    });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Booking.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving bookings."
      });
    });
};
