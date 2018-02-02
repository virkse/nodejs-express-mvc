// This will load our .env file and add the values to process.env,
// IMPORTANT: Omit this line if you don't want to use this functionality
require('dotenv').config({silent: true});



module.exports = {
  port: process.env.PORT || 3000,
  env: process.env.ENV || 'development',

  // Environment-dependent settings
  development: {
    db: {
      dialect: 'mysql',
      database: 'booking_node',
      user: 'root',
      password: 'abc123',
      storage: ':memory:'
    }
  },
  production: {
    db: {
      dialect: 'mysql',
      storage: 'db/database.sqlite'
    }
  }
};