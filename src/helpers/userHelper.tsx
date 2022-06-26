export const setUserData = function (data) {
  localStorage.setItem("userData", JSON.stringify(data));
};

export const getUserData = function () {
  let userData = localStorage.getItem("userData");
  return userData ? JSON.parse(userData) : "";
};

export const setJwtToken = function (token) {
  localStorage.setItem("jwtToken", JSON.stringify(token));
};

export const getJwtToken = function () {
  let token = localStorage.getItem("jwtToken");
  return token ? JSON.parse(token) : "";
};

export const clearUserInfo = function () {
  localStorage.removeItem("userData");
  localStorage.removeItem("jwtToken");
};
