const router = require('express').Router();
const auth = require('../../middleware/authentication');
const isAdmin = require('../../middleware/isAdmin');
const {
    getPemesanan,
    getPemesananById,
    createPemesanan,
    updatePemesanan,
    deletePemesanan,
} = require('../controllers/pemesananController');

// Router CRUD Pemesanan
router.get('/',auth, isAdmin, getPemesanan);
router.get('/:id', getPemesananById);
router.post('/', auth, createPemesanan);
router.put('/:id', auth, isAdmin, updatePemesanan);
router.delete('/:id', auth, isAdmin, deletePemesanan);

module.exports = router;
