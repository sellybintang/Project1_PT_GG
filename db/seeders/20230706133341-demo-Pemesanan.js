'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pemesanan',{});
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pemesanan', null, {});
  }
};
