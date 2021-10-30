import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const instance = axios.create({
  baseURL: "https://yorkriverbookstore.herokuapp.com/api/",
  headers: {
    "Content-Type": "application/json",
    "X-CSRFToken": cookies.get("csrftoken"),
  },
  credentials: "same-origin",
});
export default instance;