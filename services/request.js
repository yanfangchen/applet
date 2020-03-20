import {
    baseURL,
    timeout,
  } from './config.js';

class RequestService {
    constructor() {}
    /**
     * Sends a GET-Request to the given url.
     */
    get(url, opt = {}) {
      opt.method = 'GET';
      return this.request(url, opt);
    }
  
    /**
     * Sends a PUT-Request to the given url.
     *
     */
    put(url, data, opt = {}) {
      opt.method = 'PUT';
      opt.data = data;
      return this.request(url, opt);
    }
  
    /**
     * Sends a PATCH-Request to the given url.
     *
     */
    patch(url, data, opt = {}) {
      opt.method = 'PATCH';
      opt.data = data;
      return this.request(url, opt);
    }
  
    /**
     * Sends a POST-Request to the given url.
     *
     */
    post(url, data, opt = {}) {
      opt.method = 'POST';
      opt.data = data;
      return this.request(url, opt);
    }
  
    /**
     * Sends a DELETE-Request to the given url.
     *
     */
    del(url, opt = {}) {
      opt.method = 'DELETE';
      return this.request(url, opt);
    }
  
    /**
     * Sends a HEAD-Request to the given url.
     *
     */
    head(url, opt = {}) {
      opt.method = 'HEAD';
      return this.request(url, opt);
    }
  
    /**
     * Sends a OPTIONS-Request to the given url.
     *
     */
    options(url, opt = {}) {
      opt.method = 'OPTIONS';
      return this.request(url, opt);
    }

    request(url, options) {
        wx.showLoading({
          title: '加载中...',
        });
        let token = wx.getStorageSync("token");
        const header = {};
        if (token) {
          header['Authorization'] = token;
        }
        return new Promise((resolve, reject) => {
          wx.request({
            url: baseURL + url,
            method: options.method,
            data: options.data,
            header: header,
            timeout: timeout,
            success: (res) => {
              resolve(res);
            },
            fail: (err) => {
              reject(err);
            },
            complete: (res) => {
              wx.hideLoading();
            }
          })
        })
    }
}
export default () => {
    return new RequestService();
}