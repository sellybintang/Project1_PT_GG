const { jenispembayaran } = require('../models');

const getJenispembayaran = async (req, res) => {
    try {
        const jenispembayarans = await jenispembayaran.findAll();
        res.status(200).json({
            message: 'data semua bandara',
            jenispembayarans,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

const getJenispembayaranById = async (req, res) => {
    try {
        const { id, } = req.params;
        const oneJenispembayaran = await jenispembayaran.findOne({ where: { id, }, });
        res.status(200).json({
            jenispembayaran: oneJenispembayaran,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

const addJenispembayaran = async (req, res) => {
    try {
        const newJenispembayaran = await jenispembayaran.create(req.body);
        res.status(200).json({
            message: 'data bandara berhasil ditambahkan',
            newJenispembayaran,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

const updateJenispembayaran = async (req, res) => {
    try {
        const { id, } = req.params;
        await jenispembayaran.update(req.body, { where: { id, }, });
        res.status(200).json({
            message: 'data bandara berhasil diubah',
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

const deleteJenispembayaran = async (req, res) => {
    try {
        const { id, } = req.params;
        await jenispembayaran.destroy({ where: { id, }, });
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
    getJenispembayaran,
    getJenispembayaranById,
    addJenispembayaran,
    updateJenispembayaran,
    deleteJenispembayaran,
};