/* indent size: 2 */

module.exports = (app) => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define(
    "work_names",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      code_work: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      order_work: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      status_work: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      code_name: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      timestamp: {
        //我们自己定义的时间戳字段
        type: DataTypes.DATE,
        defaultValue: app.Sequelize.NOW,
      },
    },
    {
      tableName: "work_names",
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    }
  );

  Model.associate = function () {};

  return Model;
};
