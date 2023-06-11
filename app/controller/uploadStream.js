// eslint-disable-next-line strict
const Controller = require("egg").Controller;
const fs = require("mz/fs");
const path = require("path");
const sendToWormhole = require("stream-wormhole");
/**
 * @Controller 流的文件上传
 */
class UserController extends Controller {
  /**
   * @summary 文件上传（流的方式实现）
   * @description 使用文件流上传
   * @router post /api/uploadStream
   * @request  filename 文件名 file 文件对象
   * @response 200
   */
  async upload() {
    let { ctx } = this;
    let stream = await ctx.getFileStream();
    let filename = stream.filename;
    let baseUrl = path.join("app/public/static", filename);
    let result = await new Promise((resolve, reject) => {
      let flag = false;
      const writeStream = fs.createWriteStream(baseUrl);
      stream.pipe(writeStream);
      writeStream.on("err", () => {
        flag = true;
        sendToWormhole(stream);
        writeStream.destroy();
      });

      writeStream.on("finish", () => {
        if (flag) {
          return;
        }
        resolve({
          filename,
          url: baseUrl,
        });
      });
    });
    this.ctx.body = {
      errno: 0,
      msg: "上传成功",
      data: [
        {
          url: "http://localhost:7001/public/static/" + result.filename,
          alt: result.filename,
          href: "http://localhost:7001/public/static/" + result.filename,
        },
      ],
    };
  }
}

module.exports = UserController;
