const Controller = require("egg").Controller;

/**
 * @Controller users表接口操作
 */
class Login extends Controller {
  /**
   * @summary 用户登录
   * @description 测试swagger文档是否可用
   * @router get /api/login
   * @request query string str 随机字符串
   * @response 200 testResponse
   */
  async index() {
    let { username, password } = this.ctx.query;
    try {
      let data = await this.ctx.model.Users.findAll({
        where: {
          user_name: username,
          password,
        },
      });
      if (data.length == 0) {
        this.ctx.body = { msg: "当前用户不存在", code: -1 };
      } else {
        let secretStr = this.ctx.app.config.secretStr;
        let token = this.ctx.helper.createToken(
          { username, password },
          secretStr
        );
        // 将token 写入对应的数据库用户
        let res = await this.ctx.model.Users.update(
          { token: token },
          {
            where: {
              id: data[0].id,
            },
          }
        );
        data[0].token = token;
        this.ctx.body = {
          msg: "请求成功",
          code: 0,
          data,
        };
      }
    } catch (e) {}
  }
}

module.exports = Login;
