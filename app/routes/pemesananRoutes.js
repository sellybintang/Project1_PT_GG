const router = require('express').Router();
const auth = require('../../middleware/authentication');
const isAdmin = require('../../middleware/isAdmin');
const {
    getPemesanan,
    getPemesananById,
    addPemesanan,
    updatePemesanan,
    deletePemesanan,
} = require('../controllers/airportController');

router.get('/', getPemesanan);
router.get('/:id', getPemesananById);
router.post('/', auth, isAdmin, addPemesanan);
router.put('/:id', auth, isAdmin, updatePemesanan);
router.delete('/:id', auth, isAdmin, deletePemesanan);

module.exports = router;
