/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('users', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    role_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    sex: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    updatedAt: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
    },
    token: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
    },
    tel_phone: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ''
    }
  }, {
    tableName: 'users'
  });

  Model.associate = function() {

  }

  return Model;
};
