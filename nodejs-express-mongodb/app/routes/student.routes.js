module.exports = app => {
    const student= require("../controllers/student.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", student.create);
    router.get("/", student.findAll);
    app.use('/api/student', router);
};