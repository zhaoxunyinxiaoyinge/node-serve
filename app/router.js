"use strict";
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller, io } = app;
  // 这是定义常用路径的访问
  // router.get("/", controller.home.list);

  io.of('/').route("exchange",io.controller.home.exchange);
  router.get("/form", controller.home.form);
  router.post("/add", controller.home.add);
  router.post("/api/uploadStream", controller.uploadStream.upload);
  router.post("/api/upload", controller.uploadfile.upload);

  // 验证egg-passrt-local中间件配置额路由
  // router.get("/login",controller.login.index);
    // 鉴权成功后的回调页面
  router.get('/authCallback', controller.home.authCallback);

  //鉴权验证成功后要跳转的页面
  // router.post('/login', app.passport.authenticate('local', { successRedirect: '/authCallback' }));


  // io 是哟个的外部控制器
  router.get("/", controller.home.index);

  // 这是定义一个resultApi

  router.post('/uploadImage',controller.upload.uploadImage);

  app.router.resources('login',"/api/login",app.controller.login);
  app.router.resources("user", "/api/user", app.controller.user);
  app.router.resources("home", "/api/home", app.controller.home);

  app.router.resources('userMenu','/api/user_menu',app.controller.userMenu);

  app.router.resources("dictMap",'/api/dict_map',app.controller.dictMap);

  app.router.resources("user_role","/api/user_role",app.controller.userRole);

  app.router.redirect("/swagger", "/swagger-ui.html", 302);
};
