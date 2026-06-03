import express from 'express'
const routes=express.Router();


routes.post('/profile', (req,res)=>{
    res.send("user profile")
})


export default routes;