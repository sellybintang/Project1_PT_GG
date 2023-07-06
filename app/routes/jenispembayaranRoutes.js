const router = require('express').Router();
const auth = require('../../middleware/authentication');
const isAdmin = require('../../middleware/isAdmin');
const {
    getJenispembayaran,
    getJenispembayaranById,
    addJenispembayaran,
    updateJenispembayaran,
    deleteJenispembayaran,
} = require('../controllers/airportController');

router.get('/', getJenispembayaran);
router.get('/:id', getJenispembayaranById);
router.post('/', auth, isAdmin, addJenispembayaran);
router.put('/:id', auth, isAdmin, updateJenispembayaran);
router.delete('/:id', auth, isAdmin, deleteJenispembayaran);

module.exports = router;
