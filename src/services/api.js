import axios from "axios";

const api = axios.create({
  baseURL: "https://omnistack-backend-gabrielss.herokuapp.com"
});

export default api;
