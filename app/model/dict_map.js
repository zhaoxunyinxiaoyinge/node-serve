/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('dict_map', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    dict_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dict_type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dict_status: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    coment: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    parent_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    dict_code: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    dict_label_en: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dict_label: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dict_label_status: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    dict_label_comment: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dict_value: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'dict_map'
  });

  Model.associate = function() {

  }

  return Model;
};
