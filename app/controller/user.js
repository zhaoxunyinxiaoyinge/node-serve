// eslint-disable-next-line strict
const Controller = require('egg').Controller;
const createRule = {
  accesstoken: 'string',
};
class UserController extends Controller {
  async list() {
    let token=this.ctx.query;
    // 对传过来的参数进行验证
    // this.ctx.validate(createRule, token);
    const data = await this.ctx.service.user.list(2);
    this.ctx.body = data;
    this.ctx.status=200;
  }
}

module.exports = UserController;
