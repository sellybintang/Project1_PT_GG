'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pemesanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Iklan,{ foreignKey:'id_iklan' });
      this.belongsTo(models.jenisPembayaran,{ foreignKey:'id_jenispembayaran' });
      this.belongsTo(models.Users,{ foreignKey:'id_users' });
    }
  }
  Pemesanan.init({
    id_users: DataTypes.INTEGER,
    id_iklan: DataTypes.INTEGER,
    id_jenispembayaran: DataTypes.INTEGER,
    total_pembayaran: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pemesanan',
  });
  return Pemesanan;
};