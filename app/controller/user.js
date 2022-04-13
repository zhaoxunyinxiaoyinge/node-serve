// eslint-disable-next-line strict
const Controller = require('egg').Controller;
const createRule = {
  accesstoken: 'string',
};


/**
 * @Controller users表接口操作
 */
class UserController extends Controller {
    /**
   * @summary 获取用户的名称和角色名称
   * @description 测试swagger文档是否可用
   * @router get /api/user
   * @request query string str 随机字符串
   * @response 200 testResponse
   */
  async index(){
    let token=this.ctx.query;
    console.log(token);
    const data = await  this.ctx.app.model.Users.findAll();
    this.ctx.body = data;
    this.ctx.status=200;
  }

  async show() {
    let token=this.ctx.query;
    // 对传过来的参数进行验证
    // this.ctx.validate(createRule, token);
    // const data = await this.ctx.service.user.list(2);
    this.ctx.body = [{name:"xiaomei"}];
    this.ctx.status=200;
  }
}

module.exports = UserController;
