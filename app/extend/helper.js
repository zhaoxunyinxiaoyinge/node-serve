/**
 * 从ctx.helper可以获取下面的函数
 *
 */

const moment = require("moment");
const { XMLParser, XMLBuilder } = require("fast-xml-parser");

const sha1=require('sha1')

/**
 * token 包进行token 生成和验证解析
 */
const jwt = require("jsonwebtoken");

module.exports = {
  relativeTime(time) {
    moment(new Date(time * 1000)).fromNow();
  },

  cookie(key, name, options = options) {
    options = {
      expires: 3600,
      httpOnly: true, // 默认为 true
      encrypt: true,
      signed: false,
    };

    if (!name) {
      this.ctx.getCookie(key, {
        ...options,
      });
    } else {
      this.ctx.setCookie(key, name, options);
    }
  },
  sections(key, value) {
    if (!value) {
      return this.ctx.sections.key;
    } else {
      this.sections.key = value;
    }
  },
  parseMsg(action, payload = {}, metadata = {}) {
    const meta = Object.assign(
      {},

      {
        timestamp: Date.now(),
      },
      metadata
    );

    return {
      meta,
      data: {
        action,
        payload,
      },
    };
  },

  /**
   * 解析出xml数据
   */

  parseXMLData(data) {
    let parse = new XMLParser();
    return parse.parse(data);
  },

  getXMLData(data) {
    let build = new XMLBuilder();
    return build.build(data);
  },

  /**
   * 生成token
   * @params data[string|object] secret[string] expires[object]
   * @return string
   * 
   */
  createToken(data, secret, expires = { expiresIn: 60 * 60 }) {
    return jwt.sign(data, secret, expires);
  },

  /**
   * 解密token
   * @params token[string]  secret[string]
   * @return string | object
   */
  decodeToken(token,secret,callback) {
   return  new Promise((resolve,reject)=>{
        jwt.verify(token,secret,(err,data)=>{
            if(err){
              reject('非法token请求');
            }else{
              resolve(data);
            }
        });
      })
  },

  /**
   * 获取sticket的签名
   */
  getSignNoncestr(ctx,noncestr,timestamp,url,jsapi_ticket){
      let str=`noncestr=${noncestr}&timestamp=${timestamp}&url=${url}&jsapi_ticket=${jsapi_ticket}`;
      let arr=str.split('&').sort().join('&');
      console.log(arr,"arr")
      return sha1(arr);
  }
};
