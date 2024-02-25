const express=require('express');
const colors=require('colors');
const dotenv=require('dotenv');
const morgan = require('morgan');
const connectDB= require("./config/db.js")
const authRoute=require('./routes/authRoute.js');
const cors=require('cors');
dotenv.config();

connectDB();
const app=express();

//middle wares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use("/api/v1/auth",authRoute);

app.get('/',(req,res)=>{
    res.send(`<h1>welcome to the app</h1>`);
})
const PORT=process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`.bgCyan.white);
})