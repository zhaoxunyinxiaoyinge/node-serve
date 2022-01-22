/* eslint-disable eggache/no-unexpected-plugin-keys */
"use strict";

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  static: {
    enable: true,
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
    package: 'egg-validate',
  }
};

/* 这是egg-mysql配置，不涉及到egg-sequelize配置*/

// */
