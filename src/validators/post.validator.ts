import Joi from "joi";

import { regexConstant } from "../constants/regex.constant";
import { postErrorMessages } from "../helpers/post-error-messages.helper";

export class PostValidator {
  private static title = Joi.string()
    .min(5)
    .max(30)
    .regex(regexConstant.post.title)
    .trim()
    .messages(postErrorMessages.title);

  private static author = Joi.string()
    .min(5)
    .max(30)
    .regex(regexConstant.post.author)
    .trim()
    .messages(postErrorMessages.author);

  private static description = Joi.string()
    .min(5)
    .max(30)
    .regex(regexConstant.post.description)
    .trim()
    .messages(postErrorMessages.description);

  private static content = Joi.string()
    .min(10)
    .max(250)
    .regex(regexConstant.post.content)
    .trim()
    .messages(postErrorMessages.content);

  public static create = Joi.object({
    title: this.title.required(),
    author: this.author.required(),
    description: this.description,
    content: this.content.required(),
  });

  public static update = Joi.object({
    title: this.title,
    author: this.author,
    description: this.description,
    content: this.content,
  });
}
