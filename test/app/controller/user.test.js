const { assert, app } = require("egg-mock/bootstrap");

describe("test/app/controller/users.test.js", () => {
  describe("GET /user", () => {
    it("should work", async () => {
      // 通过 factory-girl 快速创建 user 对象到数据库中
      await app.factory.createMany("user", 3);
      const res = await app.httpRequest().get("/user?accesstoken=xiamei");
      console.log(res);
      assert(res.status === 200);
      assert(res.body[0].name);
      assert(res.body[0].age);
    });
  });
});
