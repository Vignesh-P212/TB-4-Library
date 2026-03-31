import express from "express"
import dotenv from "dotenv"
import conenectdb from "./src/config/dbconfig.js";
import router from "../Demo/src/router/student.js";
import login from "../Demo/src/router/auth.js"
dotenv.config();

conenectdb();
const app=express();



app.use(express.json());

app.use("/api/Student/v1",router);    //global endpoint
app.use("/api/auth/v1",login);


// const Port = 3000

 const Port=process.env.Port;

app.listen(Port,()=>{
    console.log(`server is running on ${Port}`)
})