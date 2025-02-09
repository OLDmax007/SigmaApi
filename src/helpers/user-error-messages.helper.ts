export const userErrorMessages = {
  firstName: {
    "string.base": "The first name must be a string",
    "string.empty": "The first name can not be empty",
    "any.required": "The first name must be entered",
    "string.min": "The first name must be no less than 3 letters",
    "string.max": "The first name must be no larger than 15 letters",
    "string.pattern.base": "The first name is not valid",
  },
  lastName: {
    "string.base": "The last name must be a string",
    "string.empty": "The last name can not be empty",
    "any.required": "The last name must be entered",
    "string.min": "The last name must be no less than 5 letters",
    "string.max": "The last name must be no larger than 30 letters",
    "string.pattern.base": "The last name is not valid",
  },
  password: {
    "string.base": "The password must be a string",
    "string.empty": "The password can not be empty",
    "any.required": "The password must be entered",
    "string.min": "The password must be no less than 3 symbols",
    "string.max": "The password must be no larger than 20 symbols",
    "string.pattern.base": "The password is not valid",
  },
  email: {
    "string.base": "The email must be a string",
    "string.empty": "The email can not be empty",
    "any.required": "The email must be entered",
    "string.min": "The email must be no less than 3 letters",
    "string.max": "The email must be no larger than 50 letters",
    "string.pattern.base": "The email is not valid",
  },
  age: {
    "number.base": "The age must be a number",
    "any.required": "The age must be entered",
    "number.min": "The age must be no less than 18",
    "number.max": "The age must be no larger than 90",
  },
  role: {
    "any.only": "The role must be one of 'admin' or 'user'",
  },
  gender: {
    "any.only": "The gender must be one of 'male' or 'female'",
  },
  statusMarried: {
    "any.only": "The statusMarried must be one of 'true' or 'false'",
  },
  phone: {
    "string.base": "The phone must be a string",
    "string.empty": "The phone can not be empty",
    "any.required": "The phone must be entered",
    "string.pattern.base": "The phone is not valid",
  },
};
