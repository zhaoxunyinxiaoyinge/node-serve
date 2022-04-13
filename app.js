const LocalStrategy = require("passport-local").Strategy; 
module.exports = (app) => {
  // app.passport.use(
  //   new LocalStrategy(
  //     {
  //       passReqToCallback: true,
  //     },
  //     (req, username, password, done) => {
  //       const user = {
  //         provider: "local",
  //         username,
  //         password,
  //       };
  //      console.log("%s %s get user: %j", req.method, req.url, user);

  //       app.passport.doVerify(req, user, done);
  //     }
  //   )
  // );

  // 处理用户信息
  // app.passport.verify(async (ctx, user) => {
    
  //   // 这里执行查询库的操作，对当前的用户进行验证，如果没有，就调用注册逻辑进行操作
  //   return user;
  // });

  // app.passport.serializeUser(async (ctx, user) => {
  //     // 这里再验证之后会执行逻辑。
  //     // ctx.helper.sections('username',user.username);
  //     return user;

  // });

  // app.passport.deserializeUser(async (ctx, user) => {
  //   console.log(user,'正常反向序列化');
  //   // return user;
  // });
};
