const Service = require("egg").Service;

class UserService extends Service {
  /**
   * @params access_token
   * @returns "openid":["OPENID1","OPENID2"]},
   */
  async getWxUserList() {
    const accessToken = this.config.access_token;
    return this.ctx.curl(
      `https://api.weixin.qq.com/cgi-bin/user/get?access_token=${accessToken}`,
      {
        dataType: "json",
      }
    );
  }

  /**
   *
   * @param  Array
   * @returns  object
   */
  async getWxUserInfo(list) {
    const accessToken = this.config.access_token;
    return this.ctx.curl(
      `https://api.weixin.qq.com/cgi-bin/user/info/batchget?access_token=${accessToken}`,
      {
        method: "post",
        dataType: "json",
        data: JSON.stringify({ user_list: list }),
      }
    );
  }
}
module.exports = UserService;
