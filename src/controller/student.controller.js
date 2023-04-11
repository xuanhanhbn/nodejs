const Student = require("../models/student")

exports.get = (req, res) => {
    Student.find({})
        .then(rs => {
            res.render('student/list', {
                items: rs
            });
        })
        .catch(err => {
            // 
            console.log('err:: ', err);
        })
}
exports.createForm = (req, res) => {
    res.render('student/create');

}
exports.save = (req, res) => {
    let s = req.body
    let newStudent = new Student(s)
    newStudent.save()
        .then(rs => {
            res.redirect("/students");
        })
        .catch(err => {
            res.send(err)
        })
}

exports.edit = (req, res) => {
    let id = req.params.id
    Student.findById(id)
        .then(rs => {
            res.render('student/edit', {
                data: rs
            });
        })
        .catch(err => {
            res.send(err)
        })
}

exports.saveEdit = (req, res) => {
    let data = req.body
    let id = req.params.id
    Student.findByIdAndUpdate(id, data)
        .then(rs => {
            res.redirect("/students");
        })
        .catch(err => {
            res.send(err)
        })
}

exports.delete = (req, res) => {
    let id = req.params.id;
    let Student = require("./src/models/student");
    Student.findByIdAndDelete(id)
        .then(rs => res.redirect("/students"))
        .catch(err => res.send(err));
}