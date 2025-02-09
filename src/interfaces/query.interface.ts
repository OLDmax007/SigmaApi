import { GenderEnum } from "../enums/gender.enum";
import { RoleEnum } from "../enums/role.enum";

export interface IQueryList {
  firstName?: string;
  lastName?: string;
  gender?: GenderEnum;
  age?: number;
  ageFrom?: number;
  ageTo?: number;
  statusMarried?: boolean;
  role?: RoleEnum;
}

export interface IFilteredConditions
  extends Omit<IQueryList, "firstName" | "lastName" | "age"> {
  firstName?: { $regex: string; $options: string };
  lastName?: { $regex: string; $options: string };
  age?: number | { $gte?: number; $lte?: number };
}
