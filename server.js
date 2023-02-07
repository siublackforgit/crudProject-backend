require("dotenv").config();
const path = require("path");
const express = require('express')
const cors = require("cors")
const mongoose = require("mongoose")
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/',require("./routes/postRouter"))


mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('Database connected')
    app.listen(process.env.PORT,function(){
        console.log("Server connected")
    })
})