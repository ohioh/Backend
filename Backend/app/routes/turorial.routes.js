module.exports = app => {
  const users = require("../controllers/user.controller");
  const blog = require("../controllers/blog.controllers");
  const booking = require("../controllers/booking.controller");
  const parentdevice = require("../controllers/parentdevice.controller");
const { requireAuth } = require('../middleware/authMiddleware');
  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/users/", users.create);
  //finde by email
  router.get("/byemail/:email", users.findbyemail);
  // Retrieve all Tutorials
  router.get("/users/", users.findAll);
  // Retrieve all published Tutorials
  router.get("/published", users.findAllPublished);
  // Retrieve a single Tutorial with id
  router.get("/users/:id", users.findOne);
  // Update a Tutorial with id
  router.put("/users/:id", users.update);
  // Delete a Tutorial with id
  router.delete("/users/:id", users.delete);
  // Create a new Tutorial
  router.delete("/users/", users.deleteAll);

  router.post("/blog/", blog.create);
  //finde by email
  //router.get("/byemail/:email", blog.findbyemail);
  // Retrieve all Tutorials
  router.get("/blog/", blog.findAll);
  // Retrieve all published Tutorials
  router.get("/published", blog.findAllPublished);
  // Retrieve a single Tutorial with id
  router.get("/blog/:id", blog.findOne);
  // Update a Tutorial with id
  router.put("/blog/:id", blog.update);
  // Delete a Tutorial with id
  router.delete("/blog/:id", blog.delete);
  // Create a new Tutorial
  router.delete("/blog/", blog.deleteAll);

  router.post("/parentdevice/", parentdevice.create);
  //finde by email
  //router.get("/byemail/:email", parentdevice.findbyemail);
  // Retrieve all Tutorials
  router.get("/parentdevice/", parentdevice.findAll);
  // Retrieve all published Tutorials
  router.get("/published", parentdevice.findAllPublished);
  // Retrieve a single Tutorial with id
  router.get("/parentdevice/:id", parentdevice.findOne);
  // Update a Tutorial with id
  router.put("/parentdevice/:id", parentdevice.update);
  // Delete a Tutorial with id
  router.delete("/parentdevice/:id", parentdevice.delete);
  // Create a new Tutorial
  router.delete("/parentdevice/", parentdevice.deleteAll);

  router.post("/booking/", booking.create);
  //finde by email
  //router.get("/byemail/:email", booking.findbyemail);
  // Retrieve all Tutorials
  router.get("/booking/", booking.findAll);
  // Retrieve all published Tutorials
  router.get("/published", booking.findAllPublished);
  // Retrieve a single Tutorial with id
  router.get("/booking/:id", booking.findOne);
  // Update a Tutorial with id
  router.put("/booking/:id", booking.update);
  // Delete a Tutorial with id
  router.delete("/booking/:id", booking.delete);
  // Create a new Tutorial
  router.delete("/booking/", booking.deleteAll);

  app.use("/api/spottroup", router);
};
