import axios from "axios";

const instance = axios.create({
  baseURL: "https://the-career-maker-server-omega.vercel.app/api/v1",
  withCredentials: true,
});

const UseAxios = () => {
  return instance;
};

export default UseAxios;
