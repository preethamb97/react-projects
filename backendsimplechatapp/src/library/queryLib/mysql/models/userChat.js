const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../../core/mysql');
const logger = require('../../../../core/logger')

let userChatModel;

const initUserChatModel = async () => {
  try {
    if (userChatModel) return userChatModel;

    userChatModel = sequelize.define('chat_history', {
      chat_history_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: new Date()
      },
      status: {
        type: DataTypes.SMALLINT(4),
        defaultValue: 1
      }
    }, {
      freezeTableName: true
    });

    await userChatModel.sync({
      alter: true
    });

    return userChatModel;
  } catch (err) {
    logger.error(err);
    return null;
  }
};

module.exports = { initUserChatModel };