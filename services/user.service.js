import { model } from "../models/users.model.js";
import bcrypt from "bcrypt";
import { createToken } from "./token.service.js";
export function userService() {
  return model();
}

export async function userRegisterService(nombre, password, email) {
  try {
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

    await model().insertOne({ nombre, password: hash, email });

    return {
      status: 201,
      message: "usuario creado",
    };
  } catch (e) {
    return {
      status: 400,
      message: "error creando usuario",
    };
  }
}

export async function userLoginService(password, email) {
  const findUser = await model().findOne({ email });

  if (!findUser) {
    return {
      status: 400,
      message: "Clave o Correo incorrecto",
    };
  }

  const hasPass = await bcrypt.compare(password, findUser.password);
console.log(hasPass)
  if (!hasPass) {
    return {
      status: 400,
      message: "Clave o Correo incorrecto",
    };
  }
  const token = createToken(findUser.nombre, findUser.email);
  return {
    status: 200,
    message: { status: "OK", message: "login correcto", token },
  };
}

export async function userProfileService(email) {
  return await model().findOne({ email });
}
