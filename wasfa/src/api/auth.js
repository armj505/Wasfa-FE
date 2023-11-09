import { jwtDecode } from "jwt-decode";
import { instance } from ".";

const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decode = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decode.exp < currentTime) {
      localStorage.removeItem("token");
      return false;
    }
    return true;
  }
  return false;
};

const register = async (userInfo) => {
  const formData = new FormData();
  for (const key in userInfo) formData.append(key, userInfo[key]);
  const { data } = await instance.post(
    // "", add the register link from the backend
    formData
  );
  storeToken(data.token);
  return data;
};

const logIn = async (userInfo) => {
  const { data } = await instance.post(
    // "", add the login link from the backend
    userInfo
  );
  storeToken(data.token);
  return data;
};

const logOut = () => {
  localStorage.removeItem("token");
};

export { register, logIn, checkToken, logOut };
