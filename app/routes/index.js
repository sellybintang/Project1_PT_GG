const express = require('express');

const router = express.Router();
const authRoutes = require('./authRoutes');
const iklanRoutes = require('./iklanRoutes');
const jenispembayaranRoutes = require('./jenispembayaranRoutes');
const pemesananRoutes = require('./pemesananRoutes');

//API routes

// // API Auth Login
router.use('/api', authRoutes)
router.use('/api/iklans', iklanRoutes)
router.use('/api/jenispembayaran', jenispembayaranRoutes)
router.use('/api/pemesanan', pemesananRoutes)
// router.get('/user',authenticate,user)

module.exports = router
