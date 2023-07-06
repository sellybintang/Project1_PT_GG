const { pemesanan } = require('../models');

const getPemesanan = async (req, res) => {
    try {
        const pemesanans = await pemesanan.findAll();
        res.status(200).json({
            message: 'data semua bandara',
            pemesanans,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

const getPemesananById = async (req, res) => {
    try {
        const { id, } = req.params;
        const onePemesanan = await pemesanan.findOne({ where: { id, }, });
        res.status(200).json({
            pemesanan: onePemesanan,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

const addPemesanan = async (req, res) => {
    try {
        const newPemesanan = await pemesanan.create(req.body);
        res.status(200).json({
            message: 'data bandara berhasil ditambahkan',
            newPemesanan,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

const updatePemesanan = async (req, res) => {
    try {
        const { id, } = req.params;
        await pemesanan.update(req.body, { where: { id, }, });
        res.status(200).json({
            message: 'data bandara berhasil diubah',
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

const deletePemesanan = async (req, res) => {
    try {
        const { id, } = req.params;
        await pemesanan.destroy({ where: { id, }, });
        res.status(200).json({
            message: 'data bandara berhasil dihapus',
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

module.exports = {
    getPemesanan,
    getPemesananById,
    addPemesanan,
    updatePemesanan,
    deletePemesanan,
};