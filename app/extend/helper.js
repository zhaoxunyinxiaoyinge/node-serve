const moment = require("moment");
module.exports = {
  relativeTime(time) {
    moment(new Date(time * 1000)).fromNow();
  },

  cookie(key, name, options = options) {
  options = {
      expires: 3600,
      httpOnly: true, // 默认为 true
      encrypt: true,
      signed: false,
    };

    if (!name) {
      this.ctx.getCookie(key, {
        ...options,
      });
    } else {
      this.ctx.setCookie(key, name, options);
    }
  },
  sections(key, value) {
    if (!value) {
      return this.ctx.sections.key;
    } else {
      this.sections.key = value;
    }
  },
  parseMsg(action, payload = {}, metadata = {}) {
    const meta = Object.assign(
      {},
      {
        timestamp: Date.now(),
      },
      metadata
    );

    return {
      meta,
      data: {
        action,
        payload,
      },
    };
  },
};
