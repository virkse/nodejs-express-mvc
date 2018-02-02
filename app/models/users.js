'use strict';

const Moment = require('moment');
const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  let Users = sequelize.define('users', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile: DataTypes.STRING
  });

  return Users;
};