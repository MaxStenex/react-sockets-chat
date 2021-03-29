import axios from "axios";
import { LoginValuesType } from "../types";

const instance = axios.create({ baseURL: "/" });

export const loginUser = (loginValues: LoginValuesType) =>
  instance.post("/user/login", { ...loginValues });
