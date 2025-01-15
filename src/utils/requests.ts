import type { RestResp } from "#/RestResp";
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { StatusCode } from "@/config/StatusCode";
import { BASE_URL } from "@/config/api";

// 创建 axios 实例
const request: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么，例如添加 token
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;
    if (res.code === StatusCode.SUCCESS) {
      return res;
    }
    return Promise.reject(
      new Error(`(${res.code})${res.msg}`)
    );
  },
  (error) => {
    // 统一处理错误
    return Promise.reject(error);
  }
);

const handlePath = (url: string, baseUrl?: string) => {
  const path = baseUrl ? baseUrl + url : url;
  return path;
};

export const get = <P, T = null>(
  url: string,
  params?: P,
  config?: AxiosRequestConfig,
  baseUrl: string = BASE_URL
): Promise<RestResp<T>> => {
  const path = handlePath(url, baseUrl);
  return request.get(path, { ...config, params });
};

export const post = <D, T = null>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig,
  baseUrl: string = BASE_URL
): Promise<RestResp<T>> => {
  const path = handlePath(url, baseUrl);
  return request.post(path, data, config);
};

export const put = <D, T = null>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig,
  baseUrl: string = BASE_URL
): Promise<RestResp<T>> => {
  const path = handlePath(url, baseUrl);
  return request.put(path, data, config);
};

export const patch = <D, T = null>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig,
  baseUrl: string = BASE_URL
): Promise<RestResp<T>> => {
  const path = handlePath(url, baseUrl);
  return request.patch(path, data, config);
};

export const del = <T = null>(
  url: string,
  config?: AxiosRequestConfig,
  baseUrl: string = BASE_URL
): Promise<RestResp<T>> => {
  const path = handlePath(url, baseUrl);
  return request.delete(path, config);
};

export default request;
