const express = require("express");
const mongoose = require("mongoose")
const app = express()
app.use(express.json())

const jobRouter = require("./Routes/jobs")

// mongodb connection
mongoose.connect("mongodb+srv://tejalmohod5:ZcPAFamk8CI5ZTyr@jobapplicationbackend.yobblxb.mongodb.net/ ")
    .then(() => {
        console.log("connection successfull");
    })
    .catch((err) => {
        console.log("erroe in connecting with server");
    })

app.use(jobRouter)

app.listen(10000, () => {
    console.log("node app is running on port 8080");
})