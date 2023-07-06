const router = require('express').Router();
const {login, register, verify, getProfile, loginGoogle, updateProfile} = require('../controllers/authController');
const  {getIklan, createIklan, updateIklan, deleteIklan} = require('../controllers/iklanController');


// middleware
const auth = require('../../middleware/authentication');

router.post('/auth/login', login);
router.post('/auth/register', register);
router.post('/auth/verify', verify);
router.get('/auth/profile', auth, getProfile);
router.get('/auth/google-login' , loginGoogle);
router.put('/auth/profile', auth, upload.single('image'), updateProfile);

// API Iklan
router.get('/auth/Iklan', getIklan);
router.post('/auth/createIklan', createIklan);
router.get('/auth/updateIklan', updateIklan);
router.get('/auth/deleteIklan', deleteIklan);


module.exports = router;