const db = require("../models");
const Student = db.student;
// Create and Save a new Student
exports.create = (req, res) => {
    // Validate request
    if (!req.body.firstName) {
        res.status(400).send({ message: "Content can not be empty! first error" });
        return;
      }
      // Create a Tutorial
      const student = new Student({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        studentId: req.body.studentId
      });
      // Save Tutorial in the database
      student
        .save(student)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Student."
          });
        });
    };

exports.findAll = (req, res) => {
    Student.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};