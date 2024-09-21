import axios from "axios";
import { API } from "./Api";

export const Fetch = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json",
  },
});
