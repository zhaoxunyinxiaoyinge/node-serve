// eslint-disable-next-line strict
const Controller = require("egg").Controller;
const fs = require("mz/fs");
const path = require("path");
const sendToWormhole = require('stream-wormhole');
/**
 * @Controller 文件上传操作
 */
class UserController extends Controller {
  /**
   * @summary 文件上传
   * @description 测试swagger文档是否可用
   * @router post /api/upload
   * @request  filename 文件名 file 文件对象
   * @response 200
   */
  async upload() {
    const files = this.ctx.request.files;
    let data = [];
    try {
      for (let file of files) {
        let source = fs.createReadStream(file.filepath);
        let filePath = path.join("app/public/static", file.filename);
        let target = fs.createWriteStream(filePath);
        await pump(source, target);
          data.push({
            url: "http://localhost:7001/public/static/" + file.filename,
            alt: "本地上传图片",
            href: "http://localhost:7001/public/static/" + file.filename,
          });
      }
    } catch (err) {
    } finally {
      await this.ctx.cleanupRequestFiles();
    }

    this.ctx.body = {
      errno: 0,
      msg: "上传成功",
      data,
    };
    this.ctx.status = 200;
  }
}

module.exports = UserController;
