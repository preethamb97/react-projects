const Sequelize = require('sequelize');
const { MYSQL_SETTINGS } = require('../config/settings');

const sequelize = new Sequelize(MYSQL_SETTINGS.DB, MYSQL_SETTINGS.USER, MYSQL_SETTINGS.PASSWORD, {
  host: MYSQL_SETTINGS.HOST,
  dialect: MYSQL_SETTINGS.dialect,
  pool: {
    max: MYSQL_SETTINGS.pool.max,
    min: MYSQL_SETTINGS.pool.min,
    acquire: MYSQL_SETTINGS.pool.acquire,
    idle: MYSQL_SETTINGS.pool.idle,
    evict: 1000
  },
  retry: {
    match: [
      Sequelize.ConnectionError,
      Sequelize.ConnectionTimedOutError,
      Sequelize.TimeoutError,
      /SequelizeConnectionError/
    ],
    max: 5
  },
  dialectOptions: {
    connectTimeout: 60000,
  },
  logging: false,
  define: {
    timestamps: false
  }
});

module.exports = { sequelize };