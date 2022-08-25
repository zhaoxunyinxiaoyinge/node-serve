/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('bananer', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pic: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '1'
    },
    text: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'bananer'
  });

  Model.associate = function() {

  }

  return Model;
};
