/* eslint-disable no-undef */
// eslint-disable-next-line strict
const Service = require("egg").Service;
class HomeService extends Service {
  async list() {
    const data =await this.app.mysql.get("user_role");
    return data;
  }
}
module.exports = HomeService;
