const express = require("express");
const app = express();
// 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Running....');
});

app.set("view engine", "ejs")

const studentRouter = require("./src/routes/student.route")
app.use("/students",studentRouter)
// Connect mongodb
const database = require("./src/database")

app.get("/", (req, res) => {
    let student = {
        name: "A",
        age: 20
    };
    let classRoom = {
        name: "T2203E",
        room: "B14",
    }

    res.render("home", {
        student: student,
        classRoom: classRoom
    })
})


