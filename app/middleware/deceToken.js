const moment = require("moment");
module.exports = () => {
  return async (ctx, next) => {
    let token = ctx.headers.authorization ? ctx.headers.authorization : "";
    try {
      let result = await ctx.helper.decodeToken(
        token,
        ctx.app.config.secretStr
      );

      // 防止不同的用户之间盗用token，造成访问
      if (moment().unix() - result.exp <= 0) {
        return next();
      } else {
        ctx.body = {
          code: -2,
          msg: "token已经失效",
        };
      }
    } catch (err) {
      ctx.body = {
        code: -1,
        msg: err,
      };
    }
  };
};
