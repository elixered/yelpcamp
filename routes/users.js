const express = require('express');
const passport = require('passport');
const router = express.Router({ mergeParams: true });
const User = require('../models/user');
const catchAsync = require('../utils/catchAsync');
const users = require('../controllers/users');


router.get('/register', users.renderRegister);
router.post('/register', catchAsync(users.register));
router.get('/login', users.renderLogin);
router.get('/logout', users.logout);
router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.login)

module.exports = router;