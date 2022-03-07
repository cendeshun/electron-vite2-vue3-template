/*
 * @Description: 封装http请求
 */
import Axios from "./axios";

class HttpHandler {
  constructor() {
    this.axios = Axios;
  }

  //get请求
  get(url, params, config) {
    const base = {
      method: "get",
      url: url || "",
      params: params || {},
    };
    return this.axios(Object.assign(base, config));
  }
  //post请求
  post(url, params, config) {
    const base = {
      method: "post",
      url: url || "",
      data: params || {},
    };
    return this.axios(Object.assign(base, config));
  }
  //创建请求
  create(config) {
    return this.axios(config);
  }
}

export default new HttpHandler();
