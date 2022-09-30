
const Controller = require("egg").Controller;
const { Op } = require("sequelize");
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
    let { page=1, pageSize=10, parent_id,time,dict_name,dict_status} = this.ctx.query;
    let res = {};
    let offset = (page - 1) * (Number(pageSize));
    let where = {};
    if(dict_name){
      where['dict_name']=dict_name;
    }
    if(dict_status!=undefined&&dict_status!=null&dict_status!=""){
      where[dict_status]=Number(dict_status);
    }
    if(time){
        where['createdAt']={
          [Op.gt]:time.split(',')[0],
          [Op.lt]:time.split(',')[1]
        }
    }
  
    if (parent_id) {
      where.parent_id = Number(parent_id);
    }else{
      where.parent_id=0
    }
    console.log(where)
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
