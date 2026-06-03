import { model } from "../models/users.model.js";
import bcrypt from "bcrypt";
export function userService() {
  return model();
}

export async function userRegisterService(nombre, password, email) {
  const emailExist = await model().findOne({ email });
  if (emailExist) {
    return {
      status: 409,
      message: "correo duplicado",
    };
  }

  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);

  return await model().insertOne({ nombre,
     password: hash, 
     email });
}

export async function userProfileService(email) {
  return await model().findOne({ email });
}
