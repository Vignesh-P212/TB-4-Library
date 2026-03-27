import express from "express"
import dotenv from "dotenv"
import conenectdb from "./src/config/dbconfig.js";
import router from "../Demo/src/router/student.js"
dotenv.config();

conenectdb();
const app=express();



app.use(express.json());

app.use("/api/v1/Student",router);    //global endpoint


// const Port = 3000

 const Port=process.env.Port;

app.listen(Port,()=>{
    console.log(`server is running on ${Port}`)
})