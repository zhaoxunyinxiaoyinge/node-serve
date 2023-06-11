// "use strict";

// eslint-disable-next-line strict
/**
 * @Controller home表接口操作
 */
let Controller = require("egg").Controller;
class HomeController extends Controller {
  /**
   * @summary 接口测试
   * @description 表的操作
   * @router get /api/home
   * @request query string str 随机字符串
   * @response 200 testResponse
   */
  async show() {
    let data = await this.ctx.service.home.list(2);
    let arr = [];
    arr.push(data);
    this.ctx.body = data;
    this.ctx.status = 200;
  }

  async list() {
    let data = await this.ctx.service.home.list(2);
    let arr = [];
    arr.push(data);
    this.ctx.body = data;
    this.ctx.status = 200;
  }

  async form() {
    // 设置cookie
    this.ctx.cookies.set("name", "zhaoxunyin", {});
    this.ctx.cookies.set("locale", "en-US");

    await this.ctx.render("home/index");
  }

  async add() {
    let body = this.ctx.request.body;
    console.log(this.ctx);
    console.log(this.ctx.__("email"), 333);
    console.log(body, 222);
    return (this.ctx.body = body);
  }

  //用于对io 进行测试的方法
  async index() {
    await this.ctx.render("home/index");
  }

  async authCallback() {
    await this.ctx.render("home/success.html");
  }
}

module.exports = HomeController;
