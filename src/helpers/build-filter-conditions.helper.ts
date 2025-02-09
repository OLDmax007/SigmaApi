export const buildFilterConditions = (query: any) => {
  const filterConditions: any = {};

  Object.keys(query).forEach((key) => {
    switch (key) {
      case "firstName":
        filterConditions.firstName = {
          $regex: query.firstName,
          $options: "i",
        };
        break;

      case "lastName":
        filterConditions.firstName = {
          $regex: query.firstName,
          $options: "i",
        };
        break;
      case "age":
        filterConditions.age = parseInt(query.age as string);
        break;
      case "city":
        filterConditions.city = query.city;
        break;
      case "status":
        filterConditions.status = query.status;
        break;
      case "ageEqual":
        filterConditions.age = query.age;
        break;

      case "ageFrom":
        filterConditions.age = {
          ...filterConditions.age,
          $gte: parseInt(query.ageFrom as string),
        };
        break;
      case "ageTo":
        filterConditions.age = {
          ...filterConditions.age,
          $lte: parseInt(query.ageTo as string),
        };
        break;
      default:
        break;
    }
  });
  return filterConditions;
};
