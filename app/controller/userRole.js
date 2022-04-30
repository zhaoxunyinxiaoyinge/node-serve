const { Op } = require("sequelize");
const Controller = require("egg").Controller;
/**
 * @Controller user_roles表接口操作
 */
class RolesController extends Controller {
  /**
   * @summary 获取用户角色
   * @description 测试swagger文档是否可用
   * @router get /api/user_role
   * @request query string str page pageSize
   * @response 200 testResponse
   */
  async index() {
    let { page = 1, pageSize = 10, ids } = this.ctx.query;
    let res = {};
    let offset = (page - 1) * pageSize;
    let limit = Number(pageSize);
    try {
      if (ids) {
        let arrs=ids.split(",").map(item=>Number(item));
        let data=await this.ctx.model.UserRoles.findAll({
          where:{
            id:{ 
              [Op.in]: arrs, 
            }   
          }
        })
        let menuId='';
        data.forEach(item => {
            menuId+=item.menu_id;
        });

        let arrIds=Array.from(new Set(menuId.split(",").map(item=>Number(item))));
        res.data=await this.ctx.model.UserMenu.findAll({
            where:{
              id:arrIds 
              }
           })

      } else {
        res.data = await this.ctx.model.UserRoles.findAndCountAll({
          offset,
          limit,
        });
      }
      res.code = 0;
    } catch (e) {
      res.data = e;
      res.code = -1;
    }

    this.ctx.body = res;
  }

  /**
   * @summary 创建用户角色
   * @description 测试swagger文档是否可用
   * @router post /api/user_role
   * @request body string str 随机字符串
   * @response 200 testResponse
   */

  async create() {
    let data = this.ctx.request.body;
    let res = {};
    try {
      res.data = this.ctx.model.UserRoles.create(data);
      res.code = 0;
    } catch (e) {
      res.code = -1;
      res.data = e;
    }

    this.ctx.body = res;
  }

  /**
   * @summary 删除用户角色
   * @description 测试swagger文档是否可用
   * @router delete /api/user
   * @request params string id
   * @response 200 testResponse
   */

  async destroy() {
    let { id } = this.ctx.params;
    let res = {};
    try {
      res.data = await this.ctx.model.UserRoles.destroy({
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

module.exports = RolesController;
