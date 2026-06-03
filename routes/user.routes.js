import express from 'express'
import {profileController} from '../controllers/user.controller.js'
const routes=express.Router();


routes.post('/profile', profileController)


export default routes;