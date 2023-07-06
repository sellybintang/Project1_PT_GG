'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('jenispembayaran', {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('jenispembayaran', null, {});
  }
};
