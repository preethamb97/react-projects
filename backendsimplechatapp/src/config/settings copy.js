exports.API_PORT = 4000;

exports.MYSQL_SETTINGS = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: 'password',
  DB: 'testdb',
  dialect: 'mysql',
  pool: {
    max: 1,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

exports.IS_HTTPS = false;