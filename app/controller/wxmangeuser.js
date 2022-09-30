let Controller = require("egg").Controller;

module.exports = class Wxuserlist extends Controller {
  async index() {
    try {
      let data = await this.ctx.service.wxuserlist.getWxUserList();
      let list = data.data.data.openid;
      let params = list.map((item) => ({ openid: item }));
      let userInfo = await this.ctx.service.wxuserlist.getWxUserInfo(params);
      return (this.ctx.body = userInfo);
    } catch (err) {
      return (this.ctx.body = {
        code: -2,
        msg: err,
      });
    }
  }

  async create() {}
};
