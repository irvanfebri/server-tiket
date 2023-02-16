const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  urlDb: process.env.URL_MONGODB_DEV,
  jwtSecret: 'jwtSecret',
  // jwtRefreshTokenSecret: process.env.JWT_SECRET_REFRESH_TOKEN,
  jwtExpiration: '24h',
  // jwtRefreshTokenExpiration: '24h',
  gmail: process.env.GMAIL,
  password: process.env.PASSWORD,
};