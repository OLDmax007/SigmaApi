export const regexConstant = {
  user: {
    firstName: /^[A-Za-zА-Яа-яЁё]+(?:[ '-][A-Za-zА-Яа-яЁё]+)*$/,
    lastName: /^[A-Za-zА-Яа-яЁё]+(?:\s[A-Za-zА-Яа-яЁё]+)*$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,25}$/,
    phone: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
    jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/,
  },
  post: {
    title: /^[A-Za-z0-9\s.,!?'"-]+$/,
    author: /^[A-Z][a-z]+\s[A-Z][a-z]+$/,
    description: /^[A-Za-z0-9\s.,!?'"-]+$/,
    content: /^[\s\S]+$/,
  },
};
