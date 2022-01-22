module.exports = {
  schedule: {
    interval: "1000m", // 1 分钟间隔
    type: "all", // 指定所有的 worker 都需要执行
  },
  async task(ctx) {
    console.log("我是任务,我在间隔的任务时间端执行一次");
    ctx.app.cache = res.data;
  },
};
