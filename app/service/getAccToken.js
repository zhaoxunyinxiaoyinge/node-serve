const Service = require("egg").Service;
const fs = require("fs");
const { resolve } = require("path");
const path = require("path");
const request=require('request');
class GetAcckToken extends Service {
  constructor(ctx) {
    super(ctx);
    this.root = "https://cnodejs.org/api/v1";
  }
  /**
   *
   * @params appid secret grant_type
   * 获取acc_token
   */
  async getToken() {
    let { appid, secret, grant_type } = this.config;
    return await this.ctx.curl(
      `https://api.weixin.qq.com/cgi-bin/token?appid=${appid}&secret=${secret}&grant_type=${grant_type}`,
      {
        dataType: "json",
      }
    );
  }

  async customMenu(params) {
    let access_token = this.config.access_token;
    return await this.ctx.curl(
      `https://api.weixin.qq.com/cgi-bin/menu/create?access_token=${access_token}`,
      {
        dataType: "json",
        method: "post",
        data: params,
      }
    );
  }

  async deleteMenu() {
    let access_token = this.config.access_token;
    return await this.ctx.curl(
      `https://api.weixin.qq.com/cgi-bin/menu/delete?access_token=${access_token}`,
      {
        dataType: "json",
        method: "GET",
      }
    );
  }

  async deleteItem(params) {
    let access_token = this.config.access_token;
    return await this.ctx.curl(
      `https://api.weixin.qq.com/cgi-bin/menu/delconditional?access_token=${access_token}`,
      {
        dataType: "json",
        method: "GET",
        data: JSON.stringify(params),
      }
    );
  }

  // 公众号临时上传素材
  async uploadFile(params) {
    let access_token = this.config.access_token;
    return new Promise((resolve,reject)=>{
      request.post({
       url: `https://api.weixin.qq.com/cgi-bin/media/upload?access_token=60_VxYsiD43YiE87_lRMn8hXzyIt2Y_mu9rxb2FLAAsRInTNIfgekshZ-3dKsmxLMTEi_rdsd5KBDWPnoH4TukjTmD65qC590PMyGgQ0TiiqMX-OlJN0D8_oId7YBHnlC2eK3Kob2Ot9M15CA-kOXGaAGASBK&type=image`,
       formData: {
        media:fs.createReadStream(params.filepath)
       }
       },function(err,https,body){
        if(!err){
           resolve(JSON.parse(body))
        }else{
          reject(body);
        }
    })
    })
  
  }


  /**
   * 
   *@params access_token,media_id
   */

   async getLitteSource(access_token,media_id){
    console.log(access_token,media_id,555)
      return request({
        method:'GET',
        uri:`https://api.weixin.qq.com/cgi-bin/media/get?access_token=${access_token}&media_id=${media_id}`,
      },function(err,res,body){
        
      })
   }

  /***
   * @params access_token
   * 生成公众号网页sticket签名的字段
   */
  async getTicket() {
    let access_token = this.config.access_token;
    console.log(this.ctx.session.access_token,"access_token1");
    return await this.ctx.curl(
      `https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${access_token}&type=jsapi`,
      {
        dataType: "json",
      }
    );
  }

  /**
   * @params appid secret  code
   * 获取公众号网页acce_token
   */
  async getWebToken({ code }) {
    let { appid, secret } = this.config;
    return await this.ctx.curl(
      `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appid}&secret=${secret}&code=${code}&grant_type=authorization_code`
    );
  }

  /**
   * @params appid refresh_token
   * 刷新web网页下的acce_token
   */

  async reshWebToken(params) {
    let { appid } = this.config;
    return await this.ctx.curl(
      `https://api.weixin.qq.com/sns/oauth2/refresh_token?appid=${appid}&grant_type=refresh_token&refresh_token=${params.refresh_token}`
    );
  }

  /**
   * @params access_token openid
   * 拉取用户信息(需 scope 为 snsapi_userinfo)
   */

  async getUserInfo(params) {
    return await this.ctx.curl(
      `https://api.weixin.qq.com/sns/userinfo?access_token=${params.access_token}&openid=${params.openid}&lang=zh_CN`
    );
  }

  /**
   * @params access_token  openid
   * 判断当前的token是否有效
   */

  async getIsValid(params) {
    return await this.ctx.curl(
      `https://api.weixin.qq.com/sns/auth?access_token=${params.access_token}&openid=${params.openid}`
    );
  }
}

module.exports = GetAcckToken;
