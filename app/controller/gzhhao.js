// "use strict";

// eslint-disable-next-line strict
/**
 * @Controller 公众号操作
 */
let Controller = require("egg").Controller;
const { nextTick } = require("mz-modules");
let sha1 = require("sha1");
class Wgzhhao extends Controller {
  async index() {
    let { nonce, echostr, signature, timestamp } = this.ctx.query;
    let token = "zxy123456com";
    if (sha1([token, nonce, timestamp].sort().join("")) == signature) {
      return (this.ctx.body = echostr);
    } else {
      return (this.ctx.body = {
        code: -1,
        msg: "not find ",
      });
    }
  }

  async create() {
    let data = await this.ctx.fun.then((res) => res);
    let obj = this.ctx.helper.parseXMLData(data).xml;
    let body = this.ctx.getMessageAuto(obj);
    return (this.ctx.body = body);
  }

  // 创建菜单接口
  async update() {
    let params=await this.ctx.fun.then(res=>res);
    let data = await this.ctx.service.getAccToken.customMenu(params);
    this.ctx.body=data
  }

  /**
   * 删除所有的菜单,和单一菜单
   */
  async destroy() {
    let data = null;
    let params = this.ctx.params;
    console.log(params.menuid, "menuid");
    if (params.menuid) {
      data = await this.ctx.service.getAccToken.deleteItem(params);
      return data;
    } else {
      data = await this.ctx.service.getAccToken.deleteMenu();
      return (this.ctx.body = data);
    }
  }
}

module.exports = Wgzhhao;
