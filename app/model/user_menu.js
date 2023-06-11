/* indent size: 2 */

module.exports = (app) => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define(
    "user_menu",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      order: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: "0",
      },
      component: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: "",
      },
      status: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: "0",
      },
      path: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      hidden: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      icon: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      no_cancle: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      parentId: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: "0",
      },
      alwaysShow: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: "1",
      },
      isMenu: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: "1",
      },
      isOutLink: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: "0",
      },
      operationPerssion: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      timestamp: {
        //我们自己定义的时间戳字段
        type: DataTypes.DATE,
        defaultValue: app.Sequelize.NOW,
      },
    },
    {
      tableName: "user_menu",
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    }
  );

  Model.associate = function () {};

  return Model;
};
