const Controller = require("egg").Controller;

class UserMenuContronl extends Controller {
  async index() {
    let { all, title, status,pageSize,page} = this.ctx.request.query;
    let data = {};
    try {
      if (title || status) {
        let query = {};
        if (title) {
          query.title = title;
        }
        if (status || status == 0) {
          query.status = status;
        }
        data.data = await this.ctx.model.UserMenu.findAndCountAll({ where: query });
        data.code = 0;
      } else {
        if (all) {
          let currentPage=(page-1)*pageSize;
          data.data = await this.ctx.model.UserMenu.findAndCountAll(
            {
              offset:currentPage,
              limit:Number(pageSize)
            }
          );
          data.code = 0;
        }
      }
    } catch (e) {
      data.code = -1;
      data.data = e;
    }
    this.ctx.body = data;
  }
}

module.exports = UserMenuContronl;
