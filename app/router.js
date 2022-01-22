'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 这是定义常用路径的访问
  router.get('/', controller.home.list);
  router.get('/user', controller.user.list);

  // 这是定义一个resultApi
  app.router.resources('user', '/api/user', app.controller.user);
  app.router.resources('home', '/api/home', app.controller.home);
};
