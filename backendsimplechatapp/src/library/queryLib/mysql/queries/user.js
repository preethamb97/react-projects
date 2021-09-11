const { initUserModel, userModel } = require('../models/user');

module.exports.createUser = (data) => {
  try {
    initUserModel.create(data);
  } catch (error) {

  }
}