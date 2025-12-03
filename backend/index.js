import express from "express";
import dotenv from"dotenv"
import moodRouter from './routes/moodRouter.js'
import cors from 'cors';
dotenv.config()

const app =  express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());// middleware 
app.use( '/api', moodRouter)
//base url 
app.get("/", (req ,res)=>{
    res.send("hello world");
});

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})

