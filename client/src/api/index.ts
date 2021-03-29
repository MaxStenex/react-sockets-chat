import axios from "axios";
import { LoginValuesType, RegisterValuesType } from "../types";

const instance = axios.create({ baseURL: "/" });

export const loginUser = (loginValues: LoginValuesType) => {
  return instance.post("/user/login", { ...loginValues });
};

export const registerUser = (registerValues: RegisterValuesType) => {
  return instance.post("/user/register", { ...registerValues });
};
