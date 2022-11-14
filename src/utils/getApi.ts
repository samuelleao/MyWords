import axios from "axios";

export const getAPI = <T = unknown>(url: string) => {
  return axios.get<T | null>(url);
};

export const deleteAPI = <T = unknown>(url: string) => {
  return axios.delete<T | null>(url);
};

export const postAPI = <T = unknown>(url: string, data: {}) => {
  return axios.post<T | null>(url, data);
};

