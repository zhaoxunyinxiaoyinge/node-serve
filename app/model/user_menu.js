/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('user_menu', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    order: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    component: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    create_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    update_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    path: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    hidden: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    icon: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    no_cancle: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    parentId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'user_menu'
  });

  Model.associate = function() {

  }

  return Model;
};
