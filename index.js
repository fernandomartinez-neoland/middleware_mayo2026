import express from "express";
import cors from "cors";
import  userRoutes  from "./routes/user.routes.js";
import 'dotenv/config'

const api = express();
api.use(express.json());
api.use(cors());

const port = 3000;


api.get('/', (req, res)=>{
    res.send("todo bien")
})

api.use('/user', userRoutes)

api.listen(port, ()=>{
    console.log(`conectado a la url http://localhost:${port}`)
})