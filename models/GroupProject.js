const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../databases/sequelize');

const GroupProject = sequelize.define(
  'group_project',
  {
    group_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'group_id',
    },
    group_name: {
      type: DataTypes.STRING(60),
      field: 'group_name',
      allowNull: false,
    },
    group_pic: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: 'group_pic',
    },
  },
  {
    tableName: 'group_project',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,

  }
);

module.exports = GroupProject;
