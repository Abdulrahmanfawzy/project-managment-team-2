import Cookies from "js-cookie";


export const setToken = (token) => {
  Cookies.set("my_app_token", token, {
    expires: 7, 
    secure: true, 
    sameSite: "Strict",
  });
};


export const getToken = () => {
  return Cookies.get("my_app_token");
};


export const removeToken = () => {
  Cookies.remove("my_app_token");
};
