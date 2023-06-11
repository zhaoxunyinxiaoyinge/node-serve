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

  // 生成token的key值为 tokenStr

  config.secretStr = "shixianlitaibaiyyds";

  // 默认是开启了安全验证，防止csrf攻击
  config.security = {
    xframe: {
      csrf: false,
    },
  };

  //定义上传的内容最大只能为10MB
  config.bodyParser = {
    jsonLimit: "10mb",
  };

  // 配置seesion的配置
  config.session = {
    key: "EGG_SESS",
    maxAge: 7200000, // 1 天
    httpOnly: true,
    // encrypt: true,
    renew: true, //当用户在操作时，会重复执行session.
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1641183176217_2339";

  // add your middleware config here
  config.middleware = ["errorHandler", "msg"];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg'
    pageSize: 5,
    serverUrl: "https://hacker-news.firebaseio.com/v0",
    // appid: "wxf3dc859a604396ce",
    /**测试公众号appid 和appsecret */
    appid: "wxa09a85bc80fdb723",
    secret: "05a2790261643ae75925e07b810b3d84",
    // secret: "bd64484875db53cc1c1f23cfcb1f5130",

    grant_type: "client_credential",
    access_token: "",
    jsapi_ticket: "",
  };

  config.view = {
    defaultViewEngine: "nunjucks",
    mapping: {
      ".nj": "nunjucks",
    },
  };

  (config.errorHandler = {
    match: "/user", //只能user设置错误中间件
  }),
    (config.msg = {
      match: "/api/gongzhaohao",
    }),
    (config.sequelize = {
      dialect: "mysql",
      // host: "sh-cynosdbmysql-grp-rcf9rc6q.sql.tencentcdb.com",
      host: "localhost",
      // port: 25325,
      port: 3306,
      database: "vue-admin",
      password: "123456",
      define: {
        timestamps: false,
      },
    });

  // 国际化
  config.i18n = {
    defaultLocale: "en-US",
  };

  //生成文档配置参数
  config.swaggerdoc = {
    dirScanner: "./app/controller",
    basePath: "/",
    apiInfo: {
      title: "egg-swagger",
      description: "swagger-ui for egg js api",
      version: "1.0.0",
    },
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    enableSecurity: false,

    routerMap: false,
    enable: true,
  };

  // 用于设置文件上传的最大大小
  config.bodyParser = {
    jsonLimit: "1mb", //对应的时appcation/json;
    formLimit: "1mb", //对应的时表单上传值
  };

  // 普通文件上传的模式
  config.multipart = {
    // mode: "file",//普通上传文件的方式
    mode: "stream", //用流的方式来处理上传文件
  };

  //设置跨域的域名和一些方法
  config.cors = {
    origin: "*",
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH",
  };

  // 单独配置，redis
  // config.redis = {
  //   client: {
  //     port: 6379,
  //     host: "127.0.0.1",
  //     password: "",
  //     db: 0,
  //   },
  // };

  // 提供支持上传文件到oss服务
  // config.oss = {
  //   client: {
  //     accessKeyId: "AKIDa0B7oGTTEj02oLdgT1KNBj26vUotiIch",
  //     accessKeySecret: "sUryrUs0tXw5ze3DBuNbZJo33oKabNtA",
  //     bucket: "file-list-1234-1258637789",
  //     endpoint:"cos.ap-guangzhou.myqcloud.com",
  //     timeout: "60s",
  //     // accessKeyId 和 accessKeySecret 是否经过 egg-bin 加密的
  //     // encryptPassword: false,
  //   },
  // };

  config.io = {
    init: {
      wsEngine: "ws",
    },
    namespace: {
      "/": {
        connectionMiddleware: ["auth"],
        packetMiddleware: [],
      },
    },
    // redis: {
    //   host: "127.0.0.1",
    //   port: 6379,
    // },
  };

  // egg支持https服务开启的常用配置
  // config.cluster = {
  //   https: {
  //     key: path.join(__dirname, "../perssion/aidouc.work.key"),
  //     cert: path.join(__dirname, "../perssion/aidouc.work_bundle.crt"),
  //   },
  // };
  return {
    ...config,
    ...userConfig,
  };
};
