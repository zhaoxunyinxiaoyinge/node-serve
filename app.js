module.exports = async (app) => {
  //同步表
  app.logger.debug("debug info");
  app.logger.info("启动耗时 %d ms", Date.now());
  app.logger.warn("warning!");
  await app.model.sync({ alter: true });
};
