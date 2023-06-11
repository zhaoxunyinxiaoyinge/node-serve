/* indent size: 2 */

module.exports = (app) => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define(
    "bananer",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      pic: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      status: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: "1",
      },
      text: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      timestamp: {
        //我们自己定义的时间戳字段
        type: DataTypes.DATE,
        defaultValue: app.Sequelize.NOW,
      },
    },
    {
      tableName: "bananer",
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    }
  );

  Model.associate = function () {};

  return Model;
};
