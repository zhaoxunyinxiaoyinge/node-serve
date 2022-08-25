const { parseMsg } = require("../extend/helper");

// eslint-disable-next-line strict
const Controller = require("egg").Controller;
const createRule = {
  accesstoken: "string",
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

  async index() {
    let {id, user_name, password, checked, limit=10,role_name,page=1,token} =this.ctx.query;
      let data = {};
      let where={};
      if(checked){
        limit=99999;
      }
      let pages=(page-1)*limit;
      Object.keys(this.ctx.query).forEach(item=>{
        if(this.ctx.query[item]!==''&&item!==null&&item!==undefined&&item!=='checked'&&item!=='page'&&item!=='limit'&&item!=='pageSize'){
          where[item]=this.ctx.query[item];
        }
      })
    try {
      data.data = await this.ctx.app.model.Users.findAndCountAll({
        where,
        offset: pages,
        limit:Number(limit),
      });
      data.code = 0;
      data.message = "查询成功";
    } catch (e) {
      console.log(e,555)
      data.error = e;
      data.code = -1;
    }
    this.ctx.body = data;
    this.ctx.status = 200;
  }

  /**
   * @summary 添加用户信息
   * @description 测试swagger文档是否可用
   * @router post /api/user
   * @request body string str 随机字符串
   * @response 200 testResponse
   */
  async create() {
    const data = this.ctx.request.body;
    let res = {};
    try {
      let datas = await this.ctx.model.Users.create(data);
      res.code = 0;
      if (datas.length > 0) {
        res.data = { msg: "添加成功" };
      }
    } catch (e) {
      res.code = -1;
      res.data = e;
    }
    this.ctx.body = res;
  }

    /**
   * @summary 修改用户信息
   * @description 测试swagger文档是否可用
   * @router put /api/user
   * @request body string str 用户字段
   * @request params string id 用户id
   * @response 200 testResponse
   */
  async update() {
    const params = this.ctx.params;
    const datas = this.ctx.request.body;
    let data = {};
    try {
      data.data = await this.ctx.model.Users.update(
        { ...datas },
        { where: params }
      );
      data.code = 1;
    } catch (e) {
      data.data = e;
      data.code = -1;
    }
    this.ctx.body = data;
  }


    /**
   * @summary 删除用户信息
   * @description 测试swagger文档是否可用
   * @router delete /api/user
   * @request params string id 用户id
   * @response 200 testResponse
   */
  async destroy() {
    let params = this.ctx.params;
    let id = params.id;
    let data = {};
    if (id) {
      try {
        data.data = await this.ctx.model.Users.destroy({
          where: {
            ...params,
          },
        });
        data.code = 0;
      } catch (e) {
        data.data = e;
        data.code = -1;
      }
      this.ctx.body = data;
    }
  }
}

module.exports = UserController;
