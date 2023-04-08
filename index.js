const express = require("express");
const {connect} = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("server is running...");
})
app.set("view engine", "ejs")

//connect mongodb
const database = require("./src/databse")

app.get("/",function (req, res) {
    let student = {
        name: "Nguyen Duc Lan",
        age: 19
    }
    let classRoom = {
        name: "T2203E",
        room: "B14"
    }
    res.render("home",{
        abc: student,
        classRoom: classRoom
    })
})

app.get("/students",function (req, res) {
    res.render("students")
})


