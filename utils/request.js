const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://api.github.com/users',
});

module.exports = instance  ;