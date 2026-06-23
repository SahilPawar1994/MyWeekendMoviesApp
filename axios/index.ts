

import connectToDatabase from "@/config/DatabaseConnection";
import axios, { AxiosInstance } from "axios";

export interface axiosRequestType {
  url: string;
  method: string;
  data?: object;
  params?: object;
  headers?: object
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/api", // ✅ change if needed
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    await connectToDatabase()
    return config;
  },
  (error) => Promise.reject(error)
);

export const axiosRequest = async ({ url, method, data, params, headers }: axiosRequestType) => {

  try {
    const response = await axiosInstance({ url, method, data, params, headers })
    return response
  }
  catch (err) {
    console.log("err => ", err)
    throw err;
  }
}

export default axiosInstance;
