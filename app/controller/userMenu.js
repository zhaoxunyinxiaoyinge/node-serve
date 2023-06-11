const Controller = require("egg").Controller;
const { Op } = require("sequelize");
class UserMenuContronl extends Controller {
  async index() {
    let {
      all,
      title,
      status,
      pageSize = 10000,
      detail,
      parentIdByItem,
      parentId,
      page = 1,
      isMenu,
      id,
    } = this.ctx.request.query;
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
        data.data = await this.ctx.model.UserMenu.findAndCountAll({
          where: query,
        });
        data.code = 0;
      } else if (detail === "true") {
        data.data = await this.ctx.model.UserMenu.findAll({
          where: {
            id,
          },
        });
        data.code = 0;
      } else if (parentIdByItem) {
        data.data = await this.ctx.model.UserMenu.findAll({
          where: {
            id: parentId,
          },
        });
        data.code = 0;
      } else if (isMenu == 1) {
        data.data = await this.ctx.model.UserMenu.findAll({
          where: {
            isMenu: {
              [Op.not]: 2,
            },
          },
        });
        data.code = 0;
      } else {
        if (all) {
          let currentPage = (page - 1) * pageSize;
          data.data = await this.ctx.model.UserMenu.findAndCountAll({
            offset: currentPage,
            limit: Number(pageSize),
          });
          data.code = 0;
        }
      }
    } catch (e) {
      console.log(e);
      data.code = -1;
      data.data = e;
    }
    this.ctx.body = data;
  }

  async create() {
    const data = this.ctx.request.body;
    let res = {};
    try {
      res.data = await this.ctx.model.UserMenu.create(data);
      res.code = 0;
    } catch (e) {
      res.data = e;
      res.code = -1;
    }

    this.ctx.body = res;
  }

  async destroy() {
    let res = {};
    let params = this.ctx.params;
    let { id } = params;
    if (id) {
      try {
        res.code = 0;
        res.data = await this.ctx.model.UserMenu.destroy({
          where: {
            id,
          },
        });
      } catch (e) {
        res.code = -1;
        res.data = e;
      }
    } else {
      res.code = -1;
      res.data = "id不存在";
    }

    this.ctx.body = res;
  }

  async update() {
    let data = this.ctx.request.body;
    let params = this.ctx.params;
    delete data.createdAt;
    delete data.updatedAt;
    let res = {};
    try {
      res.code = 0;
      res.data = await this.ctx.model.UserMenu.update(
        { ...data },
        {
          where: params,
        }
      );
      console.log(res, "555");
    } catch (e) {
      res.code = 0;
      res.data = e;
    }
    this.ctx.body = res;
  }
}

module.exports = UserMenuContronl;
