const { Sequelize, DataTypes } = require('sequelize');
const { mysqlDB } = require('../../../../core/mysql');

const userModel = mysqlDB.define('user', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  access_token: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  user_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  mail_id: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  password_hash: {
    type: DataTypes.STRING(2000),
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE
  },
  status: {
    type: DataTypes.SMALLINT(4)
  }
}, {
  sync: { force: false },
  freezeTableName: true,
  timestamps: true
});

module.exports = {
  userModel, Sequelize
};