const { timingSafeEqual } = require("mz/crypto");

const Controller = require("egg").Controller;
/**
 * @Controller 素材操作
 */
class Sucai extends Controller {
  async create() {
    const file = await this.ctx.request.files[0];
    let data = await this.ctx.service.getAccToken.uploadFile(file);
    this.ctx.body = JSON.stringify(data);
  }

  async index() {
    const { access_token, media_id } = this.ctx.query;
    let data = await this.ctx.service.getAccToken.getLitteSource(
      access_token,
      media_id
    );
    return (this.ctx.body = data);
  }
}

module.exports = Sucai;
