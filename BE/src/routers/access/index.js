'use strict'

const express = require('express');
const AccessController = require('../../controllers/access.controller');
const router = express.Router();
const  asyncHandler = require('../../helper/asyncHandler');
const { authentication, authenticationV2 } = require('../../auth/authUtils');

router.post('/signUp', asyncHandler(AccessController.signUp));
router.post('/login', asyncHandler(AccessController.signIn));

router.get("/verify-email", asyncHandler(AccessController.verifyEmail));
// router.get("/resend-verification-email", asyncHandler(AccessController.resendVerificationEmail));

// authentication token
router.use(authentication);
router.use(authenticationV2);

router.post('/logOut', asyncHandler(AccessController.logOut));
router.post('/handleRefreshToken', asyncHandler(AccessController.handleRefreshToken));

module.exports = router;