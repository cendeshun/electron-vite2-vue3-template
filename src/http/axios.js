/*
 * @Description: 自定义axios
 */

import axios from "axios";
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";

const Axios = axios.create({
  timeout: 1000 * 15, //超时时间
});

//请求
const requestHandler = (config) => {
  const userStore = useUserStore();
  const { token } = storeToRefs(userStore);
  //console.log("用户token:", token.value);
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token.value || "",
    },
  };
  return Object.assign({}, config, options);
};

//成功响应
const responseHandler = (response) => {
  //console.log("接口响应", response);
  try {
    const code = response.data.code;
    switch (code) {
      case 404:
        response.data.message = `服务器走丢了 [-404]`;
        break;
      case 500:
        response.data.message = `服务器异常,请稍后重试 [-500]`;
        break;
      default:
        break;
    }
  } catch (error) {}
  return response.data;
};

//异常捕获
const errHandler = (error) => {
  console.warn("接口异常信息:", error);
  const err = {};
  //服务端有响应信息
  if (error.response && error.response.status) {
    err.errurl = error.response.config.url || `未捕获到发生错误接口地址`; //异常接口url
    if (error.response.data.message) {
      err.errmsg = error.response.data.message;
    }
    const status = error.response.status;
    switch (status) {
      case 400:
        err.code = 400;
        err.message = `客户端异常,请刷新后重试 [-400]`;
        break;
      case 404:
        err.code = 404;
        err.message = `服务器走丢了 [-404]`;
        break;
      case 500:
        err.code = 500;
        err.message = `服务器异常 [-500]`;
        break;
      default:
        err.code = error.response.status;
        err.message = `服务器异常,请稍后重试 [${status}]`;
        break;
    }
  } else {
    err.code = -50001;
    err.message = `服务器异常 [-50001]`;
    //超时
    if (error.request.readyState == 4 && error.request.status == 0) {
      err.code = -50002;
      err.errurl = error.request._url || "";
      err.message = `请求超时 [-50002]`;
    }
  }
  console.error("接口调用异常:", err);
  return Promise.reject(err);
};

//拦截器
Axios.interceptors.request.use(requestHandler, (error) => {
  return Promise.reject(error);
});
Axios.interceptors.response.use(responseHandler, errHandler);

export default Axios;
