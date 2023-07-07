const express = require('express');

const router = express.Router();
const authRoutes = require('./authRoutes');
const iklanRoutes = require('./iklanRoutes');
const jenispembayaranRoutes = require('./jenispembayaranRoutes');
const pemesananRoutes = require('./pemesananRoutes');

// Router Login
router.use('/api', authRoutes)
// Router Iklan 
router.use('/api/iklans', iklanRoutes)
// Router Jenis Pembayaran
router.use('/api/jenispembayaran', jenispembayaranRoutes)
// Router Penjualan/Pemesanan
router.use('/api/pemesanan', pemesananRoutes)


module.exports = router
