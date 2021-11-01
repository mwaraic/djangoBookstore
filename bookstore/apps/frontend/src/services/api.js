import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const apiUrl = process.env.NODE_ENV === 'production' ? 'https://yorkriverbookstore.herokuapp.com' : 'http://localhost:8000';

const instance = axios.create({
  baseURL: `${apiUrl}/api/`,
  headers: {
    "Content-Type": "application/json",
    "X-CSRFToken": cookies.get("csrftoken"),
  },
  credentials: "same-origin",
});
export default instance;