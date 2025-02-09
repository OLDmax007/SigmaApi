import Joi from "joi";

import { regexpConstant } from "../constants/regexp.constant";
import { GenderEnum } from "../enums/gender.enum";
import { RoleEnum } from "../enums/role.enum";
import { errorMessages } from "../helpers/error-messages.helper";

export class UserValidator {
  private static firstName = Joi.string()
    .min(3)
    .max(15)
    .regex(regexpConstant.firstName)
    .trim()
    .messages(errorMessages.firstName);

  private static lastName = Joi.string()
    .min(5)
    .max(30)
    .regex(regexpConstant.lastName)
    .trim()
    .messages(errorMessages.lastName);

  private static password = Joi.string()
    .regex(regexpConstant.password)
    .min(3)
    .max(20)
    .trim()
    .messages(errorMessages.password);

  private static email = Joi.string()
    .regex(regexpConstant.email)
    .min(3)
    .max(30)
    .trim()
    .messages(errorMessages.email);

  private static age = Joi.number().min(18).max(90).messages(errorMessages.age);

  private static role = Joi.string()

    .valid(...Object.values(RoleEnum))
    .default("user")
    .trim()
    .messages(errorMessages.role);

  private static gender = Joi.string()
    .valid(...Object.values(GenderEnum))
    .trim()
    .messages(errorMessages.gender);

  private static statusMarried = Joi.boolean().messages(
    errorMessages.statusMarried
  );

  private static phone = Joi.string()
    .optional()
    .regex(regexpConstant.phone)
    .trim()
    .messages(errorMessages.phone);

  public static create = Joi.object({
    firstName: this.firstName.required(),
    lastName: this.lastName.required(),
    age: this.age.required(),
    email: this.email.required(),
    password: this.password.required(),
    gender: this.gender.required(),
    phone: this.phone.required(),
    role: this.role,
    statusMarrie: this.statusMarried,
  });

  public static update = Joi.object({
    firstName: this.firstName,
    lastName: this.lastName,
    password: this.password,
    age: this.age,
    gender: this.gender,
  });

  public static login = Joi.object({
    email: this.email.required(),
    password: this.password.required(),
  });
}
