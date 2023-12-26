import axios from "axios";

const URL = "https://backend-sujeet2801.vercel.app/";

export const authenticateSignup = async (data) => {
  try {
    return await axios.post(`${URL}api/signup`, data);
  } catch (error) {
    console.log("Error while calling signup api", error);
  }
};

export const authenticateLogin = async (data) => {
  try {
    return await axios.post(`${URL}api/login`, data);
  } catch (error) {
    console.log("Error while calling login api", error);
    return error.response;
  }
};
