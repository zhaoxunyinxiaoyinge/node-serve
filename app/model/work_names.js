/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('work_names', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    code_work: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    order_work: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    status_work: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    code_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'work_names'
  });

  Model.associate = function() {

  }

  return Model;
};
