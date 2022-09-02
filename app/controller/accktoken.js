// "use strict";

// eslint-disable-next-line strict
/**
 * @Controller 公众号获取access_token
 */
let Controller = require("egg").Controller;
class AcckToken extends Controller {
  async index() {
    let result = await this.ctx.service.getAccToken.getToken();
    this.ctx.session.access_token=result.data.access_token;

    this.config.access_token=this.ctx.session.access_token;
    this.ctx.body={data:result.data}
  }
}

module.exports = AcckToken;
