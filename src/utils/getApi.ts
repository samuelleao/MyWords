import axios from "axios";

export const getAPI = <T = unknown>(url: string) => {
  return axios.get<T | null>(url);
};
