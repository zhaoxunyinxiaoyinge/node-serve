const { resolve } = require("mz/dns");

module.exports = () => {
  return async function msg(ctx, next) {
    console.log("开始执行了逻辑");
    if (ctx.request.method == "POST" || ctx.request.method == "PUT") {
      let message = new Promise((resolve, reject) => {
        let res = "";
        ctx.req.on("data", function (data) {
          res += data.toString();
        });
        ctx.req.on("end", function () {
          resolve(res);
        });
      });
      ctx.fun = message;
      await next();
    } else {
      next();
    }
  };
};
