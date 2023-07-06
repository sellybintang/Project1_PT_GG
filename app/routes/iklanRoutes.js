const router = require('express').Router();
const auth = require('../../middleware/authentication');
const isAdmin = require('../../middleware/isAdmin');
const {
    getIklan,
    getIklanById,
    addIklan,
    updateIklan,
    deleteIklan,
} = require('../controllers/airportController');

router.get('/', getIklan);
router.get('/:id', getIklanById);
router.post('/', auth, isAdmin, addIklan);
router.put('/:id', auth, isAdmin, updateIklan);
router.delete('/:id', auth, isAdmin, deleteIklan);

module.exports = router;
