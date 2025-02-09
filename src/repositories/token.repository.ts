import { IToken, ITokenPairAndId } from "../interfaces/token.interface";
import { Token } from "../models/token.model";

class TokenRepository {
  public async create(dto: ITokenPairAndId): Promise<IToken> {
    return await Token.create(dto);
  }

  public async deleteByParams(params: Partial<IToken>): Promise<void> {
    await Token.deleteMany(params);
  }

  public async getByParams(params: Partial<IToken>): Promise<IToken> {
    return await Token.findOne(params);
  }
}

export const tokenRepository = new TokenRepository();
