const moment = require("moment");
const relativeTime = (time) => moment(new Date(time * 1000)).fromNow();

module.exports ={
    relativeTime
}
