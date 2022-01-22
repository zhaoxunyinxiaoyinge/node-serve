/* eslint-disable strict */
/* eslint valid-jsdoc: "off" */

// 'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1641183176217_2339";

  // add your middleware config here
  config.middleware = ['errorHandler'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg'
    pageSize: 5,
    serverUrl: "https://hacker-news.firebaseio.com/v0",
  };

  config.view = {
    defaultViewEngine: "nunjucks",
    mapping: {
      ".nj": "nunjucks",
    },
  };

  config.errorHandler={
    match: '/user',//只能user设置错误中间件
  },

  config.sequelize = {
    dialect: "mysql",
    host: "127.0.0.1",
    port: 3306,
    database: "vue-admin",
    password: "root",
  };

  return {
    ...config,
    ...userConfig,
  };
};
