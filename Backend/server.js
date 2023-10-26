const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const app = express();

const PORT = process.env.PORT || 5000;

// Middle wares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routes Middleware
app.use("/users", userRoute);

// Routes
app.get("/", (req, res)=>{
    res.send("home Page");
})

// connnect to mongo Db 
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`)
    } )
})
.catch((err)=>console.log(err));