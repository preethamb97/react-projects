const { initUserChatModel } = require('../models/userChat');
const logger = require('../../../../core/logger');

module.exports.insertNewChat = async (data) => {
  try {
    const userChatModel = await initUserChatModel();
    return await userChatModel.create(data);
  } catch (error) {
    logger.info(error);
    return null;
  }
}