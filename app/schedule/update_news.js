module.exports = {
  schedule: {
    interval: "2h", //间隔 (2h执行任务操作)
    type: "all", // 指定所有的 worker 都需要执行
  },
  async task(ctx) {
    // 获取公众号自定义菜单的access_token
    let result = await ctx.service.getAccToken.getToken();
    ctx.session.access_token = result.data.access_token;
    ctx.app.config.access_token = ctx.session.access_token;

    // 获取公众号网页生成签名的jsapi_sticket
    let data = await ctx.service.getAccToken.getTicket();
    ctx.session.ticket = data.data.ticket;
    ctx.app.config.jsapi_ticket = data.data.ticket;
  },
};
