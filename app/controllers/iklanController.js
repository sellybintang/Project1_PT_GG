const { Iklan } = require('../models');

const getIklan = async (req, res) => {
    try {
        const iklans = await Iklan.findAll();
        res.status(200).json({
            message: 'data arsip semua iklan',
            iklans,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

const getIklanById = async (req, res) => {
    try {
        const { id, } = req.params;
        const oneIklan = await Iklan.findOne({ where: { id, }, });
        res.status(200).json({
            iklan: oneIklan,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

const createIklan = async (req, res) => {
    try {
        const newIklan = await Iklan.create(req.body);
        res.status(200).json({
            message: 'data iklan berhasil ditambahkan',
            newIklan,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

const updateIklan = async (req, res) => {
    try {
        const { id, } = req.params;
        await Iklan.update(req.body, { where: { id, }, });
        res.status(200).json({
            message: 'data iklan berhasil diubah',
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

const deleteIklan = async (req, res) => {
    try {
        const { id, } = req.params;
        await Iklan.destroy({ where: { id, }, });
        res.status(200).json({
            message: 'data iklan berhasil dihapus',
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

module.exports = {
    getIklan,
    getIklanById,
    createIklan,
    updateIklan,
    deleteIklan,
};