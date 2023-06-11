/* indent size: 2 */

module.exports = (app) => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define(
    "dict_map",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      dict_name: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      dict_type: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      dict_status: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: "0",
      },
      coment: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      parent_id: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: "0",
      },
      dict_code: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: "0",
      },
      dict_label_en: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      dict_label: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      dict_label_status: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: "0",
      },
      dict_label_comment: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      dict_value: {
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
      tableName: "dict_map",
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    }
  );

  Model.associate = function () {};

  return Model;
};
