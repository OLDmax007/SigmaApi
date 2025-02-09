import bcrypt from "bcrypt";

import { passwordConstant } from "../constants/password.constant";

class PasswordService {
  public async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, passwordConstant.salt);
  }

  public async comparePassword(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }
}

export const passwordService = new PasswordService();
