/* eslint-disable eggache/no-unexpected-plugin-keys */
"use strict";

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  static: {
    enable: true,
  },

  swaggerdoc: {
    enable: true,
    package: "egg-swagger-doc",
  },

  sequelize: {
    enable: true,
    package: "egg-sequelize",
  },
  nunjucks: {
    enable: true,
    package: "egg-view-nunjucks",
  },
  mysql: {
    enable: true,
    package: "egg-mysql",
  },
  validate: {
    enable: true,
    package: "egg-validate",
  },

  // 这里时开启跨域的配置
  cors: {
    enable: true,
    package: "egg-cors",
  },
  io: {
    enable: true,
    package: "egg-socket.io",
  },
  redis: {
    enable: true,
    package: "egg-redis",
  },

  passport :{
    enable: true,
    package: 'egg-passport',
  },

  // 这里是本地登录的配置
passportLocal :{
    enable: true,
    package: 'egg-passport-local',
  }
};

// 这是生成配置文档接口包文件
