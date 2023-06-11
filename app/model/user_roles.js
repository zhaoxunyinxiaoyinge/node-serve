/* indent size: 2 */

module.exports = (app) => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define(
    "user_roles",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      menu_id: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      role_status: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: "0",
      },
      roles_order: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      role_name: {
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
      tableName: "user_roles",
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    }
  );

  Model.associate = function () {};

  return Model;
};
