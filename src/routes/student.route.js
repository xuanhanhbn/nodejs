const express = require("express")
let router = express.Router();
let studentController = require("../controller/student.controller")
router.get("/", function (req, res) {

});

router.get("/create-student", studentController.get);

router.post("/students/create-student", studentController.save)

router.get("/edit-student/:id", studentController.edit);

router.post("/edit-student/:id", studentController.saveEdit)

router.post("/delete-student/:id", studentController.delete);

module.exports = router;