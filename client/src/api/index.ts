import axios from "axios";
import { LoginValuesType, RegisterValuesType } from "../types";

const instance = axios.create({ baseURL: "/" });

export const loginUser = (loginValues: LoginValuesType) => {
  return instance.post("/auth/login", { ...loginValues });
};

export const registerUser = (registerValues: RegisterValuesType) => {
  return instance.post("/auth/register", { ...registerValues });
};

export const authUserWithCookie = () => {
  return instance.get("/auth/me");
};

export const logout = () => {
  return instance.post("/auth/logout");
};

export const requestFriendship = (email: string) => {
  return instance.post("/user/create-friendship", { email });
};

export const getUserFriendships = () => {
  return instance.get("/user/friendships");
};
