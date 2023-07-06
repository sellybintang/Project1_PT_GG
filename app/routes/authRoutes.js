const router = require('express').Router();
const {login, register, verify, getProfile, loginGoogle, updateProfile} = require('../controllers/authController');
const  {getAirport, createAirport, updateAirport, deleteAirport} = require('../controllers/airportController');


// middleware
const auth = require('../../middleware/authentication');

router.post('/auth/login', login);
router.post('/auth/register', register);
router.post('/auth/verify', verify);
router.get('/auth/profile', auth, getProfile);
router.get('/auth/google-login' , loginGoogle);
router.put('/auth/profile', auth, upload.single('image'), updateProfile);

// API Airport
router.get('/auth/Airport', getAirport);
router.post('/auth/createAirport', createAirport);
router.get('/auth/updateAirport', updateAirport);
router.get('/auth/deleteAirport', deleteAirport);


module.exports = router;