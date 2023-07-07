const { jenisPembayaran } = require('../models');

// Read All Jenis Pembayaran
const getJenispembayaran = async (req, res) => {
    try {
        const jenispembayarans = await jenisPembayaran.findAll();
        res.status(200).json({
            message: 'data semua jenis pembayaran ',
            jenispembayarans,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

// Read Jenis Pembayaran ById
const getJenispembayaranById = async (req, res) => {
    try {
        const { id, } = req.params;
        const oneJenispembayaran = await jenisPembayaran.findOne({ where: { id, }, });
        res.status(200).json({
            jenisPembayaran: oneJenispembayaran,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

// Create Jenis Pembayaran
const addJenispembayaran = async (req, res) => {
    try {
        const newJenispembayaran = await jenisPembayaran.create(req.body);
        res.status(200).json({
            message: 'data jenis pembayaran berhasil ditambahkan',
            newJenispembayaran,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

// Update Jenis Pembayaran
const updateJenispembayaran = async (req, res) => {
    try {
        const { id, } = req.params;
        await jenisPembayaran.update(req.body, { where: { id, }, });
        res.status(200).json({
            message: 'data jenis pembayaran berhasil diubah',
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

// Delete Jenis Pembayaran
const deleteJenispembayaran = async (req, res) => {
    try {
        const { id, } = req.params;
        await jenisPembayaran.destroy({ where: { id, }, });
        res.status(200).json({
            message: 'data jenis pembayaran berhasil dihapus',
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

module.exports = {
    getJenispembayaran,
    getJenispembayaranById,
    addJenispembayaran,
    updateJenispembayaran,
    deleteJenispembayaran,
};