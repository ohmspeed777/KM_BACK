const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../databases/sequelize');
const project = require('./GroupProject');

const KmUnit = sequelize.define(
  'km_unit',
  {
    km_unit: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      field: 'km_id',
    },
    km_name: {
      type: DataTypes.STRING(100),
      field: 'km_name',
    },
    km_pic: {
      type: DataTypes.STRING(45),
      field: 'km_pic',
    },
    km_group: {
      type: DataTypes.INTEGER,
      field: 'km_group',
    },
  },
  {
    tableName: 'km_unit',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  }
);

KmUnit.belongsTo(project, { foreignKey: 'km_group',});

module.exports = KmUnit;
