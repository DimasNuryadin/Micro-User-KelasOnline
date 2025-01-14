'use strict';
const bcrypt = require('bcrypt');
const { DATE } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      name: 'dimas',
      profession: "Admin Micro",
      role: "admin",
      email: "dimasnuryadinn@gmail.com",
      password: await bcrypt.hash('moalbebeja', 10),
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'Dimz',
      profession: "Full Stack Developer",
      role: "student",
      email: "dimz@gmail.com",
      password: await bcrypt.hash('moalbebeja', 10),
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
