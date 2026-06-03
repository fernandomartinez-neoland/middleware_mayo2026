import jwt from 'jsonwebtoken';
import 'dotenv/config';

export function createToken(nombre, email){
    const token= jwt.sign({ nombre, email }, process.env.tokenKey);
    return token;
}