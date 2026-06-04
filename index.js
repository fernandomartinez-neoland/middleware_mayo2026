import express from "express";
import cors from "cors";
import  userRoutes  from "./routes/user.routes.js";
import sql from './config/db.js'
import 'dotenv/config'

const api = express();
api.use(express.json());
api.use(cors());

const port = 3000;


api.get('/', (req, res)=>{
    res.send("todo bien")
})

api.get('/test-db', async (req, res) => {
  try {
    console.log('🧪 Probando conexión a Supabase...')
    const result = await sql`SELECT NOW()`
    res.json({ 
      success: true, 
      message: 'Conexión exitosa a Supabase',
      timestamp: result[0]
    })
  } catch (error) {
    console.error('❌ Error de conexión:', error.message)
    res.status(500).json({ 
      success: false, 
      error: error.message,
      code: error.code
    })
  }
})

api.use('/user', userRoutes)

api.listen(port, ()=>{
    console.log(`conectado a la url http://localhost:${port}`)
})