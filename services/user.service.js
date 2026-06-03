import {model} from '../models/users.model.js'
export function userService() {
  return model();
}

export async function userRegisterService(nombre, password, email){
    return await model().insertOne({nombre, password, email})
}

export async function userProfileService(){
  return "userProfileService"
}