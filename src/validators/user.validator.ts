import Joi from "joi";

import { regexConstant } from "../constants/regex.constant";
import { GenderEnum } from "../enums/gender.enum";
import { RoleEnum } from "../enums/role.enum";
import { userErrorMessages } from "../helpers/user-error-messages.helper";

export class UserValidator {
  private static firstName = Joi.string()
    .min(3)
    .max(15)
    .regex(regexConstant.firstName)
    .trim()
    .messages(userErrorMessages.firstName);

  private static lastName = Joi.string()
    .min(5)
    .max(30)
    .regex(regexConstant.lastName)
    .trim()
    .messages(userErrorMessages.lastName);

  private static password = Joi.string()
    .regex(regexConstant.password)
    .min(3)
    .max(20)
    .trim()
    .messages(userErrorMessages.password);

  private static email = Joi.string()
    .regex(regexConstant.email)
    .min(3)
    .max(30)
    .trim()
    .messages(userErrorMessages.email);

  private static age = Joi.number()
    .min(18)
    .max(90)
    .messages(userErrorMessages.age);

  private static role = Joi.string()

    .valid(...Object.values(RoleEnum))
    .default("user")
    .trim()
    .messages(userErrorMessages.role);

  private static gender = Joi.string()
    .valid(...Object.values(GenderEnum))
    .trim()
    .messages(userErrorMessages.gender);

  private static statusMarried = Joi.boolean().messages(
    userErrorMessages.statusMarried
  );

  private static phone = Joi.string()
    .optional()
    .regex(regexConstant.phone)
    .trim()
    .messages(userErrorMessages.phone);

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

  public static checkEmail = Joi.object({
    email: this.email.required(),
  });
}
