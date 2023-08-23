'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Colors', [
    {
      name: 'orange',
      createdAt: new Date(2023, 8, 22),
      updatedAt: new Date(2023, 8, 23)
    },
    {
      name: 'green',
      createdAt: new Date(2023, 8, 22),
      updatedAt: new Date(2023, 8, 23)
    },
    {
      name: 'purple',
      createdAt: new Date(2023, 8, 22),
      updatedAt: new Date(2023, 8, 23)
    }
   ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Colors', {
      name: ['orange', 'green', 'purple']
    });
  }
};
