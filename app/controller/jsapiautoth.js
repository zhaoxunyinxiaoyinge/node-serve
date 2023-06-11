// "use strict";

// eslint-disable-next-line strict
/**
 * @Controller 公众号jsapi下的sticket操作
 */
let Controller = require("egg").Controller;
class Sticket extends Controller {
  async index() {
    try {
      const params = this.ctx.query;
      if (params.ticket) {
        let data = await this.ctx.service.getAccToken.getTicket();
        //保存ticket 生成签名
        this.ctx.session.ticket = data.data.ticket;
        this.config.jsapi_ticket = data.data.ticket;
        return (this.ctx.body = data);
      } else if (params.webToken) {
        let data = await this.ctx.service.getAccToken.getWebToken(params.code);
        await this.ctx.service.getAccToken.reshWebToken({
          grant_type: "refresh_token",
          refresh_token: data.data.refresh_token,
        });
        return (this.ctx.body = data);
      } else if (params.isReshToken) {
        let data = await this.ctx.service.getAccToken.reshWebToken(params);
        return (this.ctx.body = data);
      } else if (params.userInfo) {
        let data = await this.ctx.service.getAccToken.getUserInfo(params);
        return (this.ctx.body = data);
      } else if (params.isValid) {
        let data = await this.ctx.service.getAccToken.getIsVaild(params);
        return (this.ctx.body = data);
      }
    } catch (e) {
      return (this.ctx.body = {
        code: -1,
        msg: e,
      });
    }
  }

  /**
   *
   * @returns 签名
   */
  async create() {
    const { noncestr, timestamp, url } = this.ctx.request.body;
    let jsapi_ticket = this.ctx.app.config.jsapi_ticket;
    const { ctx } = this;
    let signStr = this.ctx.helper.getSignNoncestr(
      ctx,
      noncestr,
      timestamp,
      url,
      jsapi_ticket
    );
    return (this.ctx.body = {
      signStr,
    });
  }
}

module.exports = Sticket;
