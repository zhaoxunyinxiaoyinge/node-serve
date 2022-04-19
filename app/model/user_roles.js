/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('user_roles', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    menu_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    role_status: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    roles_order: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    role_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'user_roles'
  });

  Model.associate = function() {

  }

  return Model;
};
