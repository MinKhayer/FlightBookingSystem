import axios from "axios";

let token = localStorage.getItem("Authorization");
const axiosPrivateUrl = axios.create({
  baseURL: "http://localhost:4003",
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const UseAxiosPrivate = () => {
  return { axiosPrivateUrl };
};

export default UseAxiosPrivate;
