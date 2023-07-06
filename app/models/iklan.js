'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Iklan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Pemesanan, { foreignKey:'id_iklan' });
    }
  }
  Iklan.init({
    jenis_iklan: DataTypes.STRING,
    durasi_iklan: DataTypes.STRING,
    harga_iklan: DataTypes.STRING,
    jam_tayang: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Iklan',
  });
  return Iklan;
};