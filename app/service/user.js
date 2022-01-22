const Service = require('egg').Service;

class UserService extends Service {
  constructor(ctx){
      super(ctx);
      this.root='https://cnodejs.org/api/v1';
  }
  async list(params) {
    const result = await this.app.model.User.findAll();
    // this.checkStatus(result);
    return result;
  }

  checkStatus(result){
    // 用户的错误（传参数错误）
    if(result!==200){
      const errorMsg = result.data && result.data.error_msg ? result.data.error_msg : 'unknown error';
      this.ctx.throw(result.status, errorMsg);
    }
    // 远程调用错误
    if(result.data!='success'){
      this.ctx.throw(500, 'remote response error', { data: result.data });
    }
  }
}
module.exports = UserService;