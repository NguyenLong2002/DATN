"use strict";

const { CREATED, SuccessResponse, OK } = require("../core/succes.response");
const AccessService = require("../services/access.service");

class AccessController {
  signUp = async (req, res, next) => {
    new CREATED({
      message: "REgistered OK!",
      metadata: await AccessService.signUp(req.body),
      options: {
        limit: 10,
      },
    }).send(res);
  };

  verifyEmail = async (req, res, next) => {
    // const { token } = req.query;
    // console.log("token", token)
    // const response = await AccessService.verifyEmail(token);
    // res.status(200).json(response);
    try {
    const { token } = req.query;
    console.log("token", token);

    // Call the verification service
    await AccessService.verifyEmail(token);

    // Redirect to a success page
    res.redirect("/success"); 
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Verification failed!" });
  }
  };

  
//   resendVerificationEmail = async (req, res, next) => {
//   const { email } = req.body;
//   try {
//     const result = await AccessService.resendVerificationEmail(email);
//     new SuccessResponse({
//       message: 'Verification email resent successfully!',
//       metadata: result,
//     }).send(res);
//   } catch (error) {
//     next(error);
//   }
// };


  signIn = async (req, res, next) => {
    new SuccessResponse({
      message: "Sign In success",
      metadata: await AccessService.login(req.body),
    }).send(res);
  };

  logOut = async (req, res, next) => {
    console.log(req);
    new OK({
      message: "Logout success",
      metadata: await AccessService.logout(req.keyStore),
    }).send(res);
  };

  handleRefreshToken = async (req, res, next) => {
    // new OK({
    //   message: "Get token success",
    //   metadata: await AccessService.handleRefreshToken(req.body.refreshToken),
    // }).send(res);

    new OK({
      message: "Get token success",
      metadata: await AccessService.handleRefreshTokenV2({
        refreshToken: req.refreshToken,
        user: req.user,
        keyStore: req.keyStore,
      }),
    }).send(res);
  };
}

module.exports = new AccessController();
