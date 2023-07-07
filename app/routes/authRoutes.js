const router = require('express').Router();
const {login, register, verify, getProfile, updateProfile} = require('../controllers/authController');



// middleware
const auth = require('../../middleware/authentication');

// Auth Users
router.post('/auth/login', login);
router.post('/auth/register', register);
router.post('/auth/verify', verify);
router.get('/auth/profile', auth, getProfile);

router.put('/auth/profile', auth, updateProfile);




module.exports = router;