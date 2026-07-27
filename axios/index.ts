

import axios, { type AxiosInstance, type AxiosResponse, type InternalAxiosRequestConfig } from "axios";
// import { cookies } from "next/headers";

export interface axiosRequestType {
  url: string;
  method: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'POST' | 'GET';
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
  withCredentials: true
});

const authURLs = ['/user', '/auth']
axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const { url } = config;

    if (url && authURLs.includes(url)) {
      return config;

    }

    return config; // will remove from here
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(async (config: AxiosResponse) => {
  return config;
})

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
