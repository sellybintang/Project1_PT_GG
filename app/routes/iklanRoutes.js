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

router.get('/', getAirport);
router.get('/:id', getAirplaneById);
router.post('/', auth, isAdmin, addAirport);
router.put('/:id', auth, isAdmin, updateAirport);
router.delete('/:id', auth, isAdmin, deleteAirport);

module.exports = router;
