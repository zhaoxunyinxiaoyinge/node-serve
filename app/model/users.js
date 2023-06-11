/* indent size: 2 */

module.exports = (app) => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: "",
      },
      role_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: "",
      },
      sex: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: "0",
      },
      password: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: "",
      },

      token: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      avatar: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },

      tel_phone: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "",
      },
      timestamp: {
        //我们自己定义的时间戳字段
        type: DataTypes.DATE,
        defaultValue: app.Sequelize.NOW,
      },
    },
    {
      tableName: "users",
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    }
  );

  Model.associate = function () {};

  return Model;
};
