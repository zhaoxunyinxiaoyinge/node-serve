
const Controller = require("egg").Controller;
class DictController extends Controller {
  async create() {
    let res = {};
    let queryData = this.ctx.request.body;
    queryData.parent_id=Number(queryData.parent_id);
    try {
      let data = await this.ctx.model.DictMap.create(queryData);

      res.code = 0;
      res.message = "success";
    } catch (e) {
      res.code = -1;
      res.message = e;
    }
    this.ctx.body = res;
  }

  async index() {
    let { page=1, pageSize=10, parent_id } = this.ctx.query;
    let res = {};
    let offset = (page - 1) * pageSize;
    let where = {};
    if (parent_id) {
      where.parent_id = Number(parent_id);
    }else{
      where.parent_id=0
    }
    try {
      res.data = await this.ctx.model.DictMap.findAndCountAll(
        {
          limit: Number(pageSize),
          offset: offset,
          where
        },

      );
      res.code = 0;
    } catch (e) {
      res.code = -1;
      res.data = e;
    }
    res.page = page;
    res.pageSize = pageSize;
    this.ctx.body = res;
  }

  async update() {
    let res = {};
    const data = this.ctx.request.body;
    const params = this.ctx.params;
    try {
      res.data = await this.ctx.model.DictMap.update(
        { ...data },
        {
          where: {
            id:Number(params.id),
          },
        }
      );
      res.code = 0;
    } catch (e) {
      res.code = -1;
      res.data = e;
    }

    this.ctx.body = res;
  }

  async destroy() {
    let res = {};
    let id = this.ctx.params.id;
    try {
      res.data = await this.ctx.model.DictMap.destroy({
        where: {
          id,
        },
      });
      res.code = 0;
    } catch (e) {
      res.code = -1;
      res.data = e;
    }
    this.ctx.body = res;
  }
}

module.exports = DictController;
