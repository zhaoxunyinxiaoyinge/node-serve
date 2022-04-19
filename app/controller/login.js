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
      if(data.length==0){
         this.ctx.body={msg:"当前用户不存在",code:-1};
      }else{
         this.ctx.body = {
           msg:"请求成功",
           code:0,
           data
         }
      }
     
    } catch (e) {}
  }
}

module.exports = Login;
