import { GenderEnum } from "../enums/gender.enum";
import { RoleEnum } from "../enums/role.enum";
import { IFilteredConditions, IQueryList } from "../interfaces/query.interface";

export const buildFilterConditions = (query: IQueryList) => {
  const filteredConditions: IFilteredConditions = {};

  Object.keys(query).forEach((key) => {
    switch (key) {
      case "firstName":
        filteredConditions.firstName = {
          $regex: query.firstName,
          $options: "i",
        };
        break;

      case "lastName":
        filteredConditions.lastName = {
          $regex: query.lastName,
          $options: "i",
        };
        break;
      case "age":
        filteredConditions.age = parseInt(query.age as unknown as string);
        break;
      case "marriedStatus":
        filteredConditions.statusMarried = query.statusMarried;
        break;
      case "role":
        filteredConditions.role = query.role as RoleEnum;
        break;

      case "gender":
        filteredConditions.gender = query.gender as GenderEnum;
        break;
      case "ageEqual":
        filteredConditions.age = query.age;
        break;

      case "ageFrom":
        filteredConditions.age = {
          $gte: parseInt(query.ageFrom as unknown as string),
        };
        break;
      case "ageTo":
        filteredConditions.age = {
          $lte: parseInt(query.ageTo as unknown as string),
        };
        break;
      default:
        break;
    }
  });
  return filteredConditions;
};
