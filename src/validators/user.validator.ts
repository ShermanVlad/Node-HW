import joi from "joi";

import { regexConstants } from "../constants/regex.constants";

export class UserValidator {
  private static name = joi.string().min(3).trim();
  private static age = joi.number().min(15).max(50);
  private static email = joi.string().lowercase().regex(regexConstants.EMAIL);
  private static password = joi.string().regex(regexConstants.PASSWORD).trim();
  private static phone = joi.string().regex(regexConstants.PHONE);

  public static createUser = joi.object({
    name: UserValidator.name.required(),
    age: UserValidator.age.required(),
    email: UserValidator.email.required(),
    password: UserValidator.password.required(),
    phone: UserValidator.phone.required(),
  });

  public static updateUser = joi.object({
    name: UserValidator.name,
    age: UserValidator.age,
    email: UserValidator.email,
    password: UserValidator.password,
    phone: UserValidator.phone,
  });
}
