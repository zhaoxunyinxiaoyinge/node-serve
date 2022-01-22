// "use strict";

// eslint-disable-next-line strict
let Controller = require('egg').Controller;
class HomeController extends Controller {
  async list() {
    let data = await this.ctx.service.home.list(2);
    let arr=[];
    arr.push(data);
    this.ctx.body = data;
    this.ctx.status=200;
  }
}

module.exports = HomeController;
