const { Pemesanan, Users, jenisPembayaran, Iklan } = require('../models');

// Read All Arsip Penjualan
let getPemesanan = async (req, res) => {
    try {
        const pemesanans = await Pemesanan.findAll({
            orders:["createdAt", "DESC"]
        },
            {
                include: [
                    {
                        model: Users
                    },
                    {
                        model: Iklan
                    },
                    {
                        model: jenisPembayaran
                    },
                ],
            }
        );
        res.status(200).json({
            message: 'data Arsip semua Penjualan',
            pemesanans,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

// Read Arsip Penjualan ById
const getPemesananById = async (req, res) => {
    try {
        const { id, } = req.params;
        const onePemesanan = await Pemesanan.findOne({ where: { id, }, });
        res.status(200).json({
            Pemesanan: onePemesanan,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

// Create Arsip Penjualan
const createPemesanan = async (req, res) => {
    const {
        id_iklan, 
        id_jenispembayaran, 
        total_pembayaran 
    } =req.body;

    try {
        const newPemesanan = await Pemesanan.create({
            id_users:req.user.id,
            id_iklan,
            id_jenispembayaran,
            total_pembayaran,
        });
        res.status(200).json({
            message: 'data Penjualan berhasil ditambahkan',
            newPemesanan,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

// Update Arsip Penjualan
const updatePemesanan = async (req, res) => {
    try {
        const { id, } = req.params;
        await Pemesanan.update(req.body, { where: { id, }, });
        res.status(200).json({
            message: 'data Penjualan berhasil diubah',
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

// Delete Arsip Penjualan
const deletePemesanan = async (req, res) => {
    try {
        const { id, } = req.params;
        await Pemesanan.destroy({ where: { id, }, });
        res.status(200).json({
            message: 'data Penjualan berhasil dihapus',
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
    createPemesanan,
    updatePemesanan,
    deletePemesanan,
};