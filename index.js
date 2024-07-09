const express = require("express");
const mongoose = require("mongoose")
const app = express()
app.use(express.json())
const dotenv=require("dotenv")

const jobRouter = require("./Routes/jobs")

// mongodb connection
dotenv.config();
console.log(process.env.DATABASE_URI);
mongoose.connect(process.env.DATABASE_URI)
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