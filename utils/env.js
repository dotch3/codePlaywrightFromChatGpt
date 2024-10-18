require('dotenv').config();

module.exports = {
  baseURL: process.env.BASE_URL || 'http://165.227.93.41/lojinha-web/v2',
  validUsername: process.env.VALID_USERNAME || 'grupo3D4',
  validPassword: process.env.VALID_PASSWORD || '123456',
  invalidUsername: process.env.INVALID_USERNAME || 'wrong',
  invalidPassword: process.env.INVALID_PASSWORD || 'wrong'
};
