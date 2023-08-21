import axios from "axios";
import { API_URL } from "../constants/layout";

const api = axios.create({
  baseURL: API_URL,
});

export { api };
