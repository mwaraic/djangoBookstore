import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const instance = axios.create({
  baseURL: "http://localhost:8000/api/",
  headers: {
    "Content-Type": "application/json",
    "X-CSRFToken": cookies.get("csrftoken"),
  },
  credentials: "same-origin",
});
export default instance;