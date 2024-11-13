import axios from "axios";
`import jwt_decode from "jwt-decode";`;

export const login = (data, callBack) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      callBack(true, res.data.token);
    })
    .catch((error) => {
      callBack(false, error);
    });
};

export const getUsername = (_token) => {
  const decoded = `jwt_decode(token)`;
  return decoded.user;
};
