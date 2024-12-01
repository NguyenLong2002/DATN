'use strict'

const express = require('express');
const router = express.Router();

//router handle
router.use('/v1/api/user', require('./user'));
router.use('/v1/api/access', require('./access'));
router.use('/v1/api/tours', require('./tours'));
// router.get("/success", (req, res) => {
//   res.send(`
//     <html>
//       <head>
//         <title>Verification Success</title>
//       </head>
//       <body>
//         <h1>Email Verified Successfully!</h1>
//         <p>Your email has been verified. You can now log in.</p>
//         <a href="/login">Go to Login</a> <!-- Replace with your login route -->
//       </body>
//     </html>
//   `);
// });

router.get('/', (req, res, next) => {
    return res.status(200).json({
        message: 'Hello word',
    })
})

module.exports = router;