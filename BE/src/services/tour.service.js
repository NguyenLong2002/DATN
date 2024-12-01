"use strict";

const bcrypt = require("bcrypt");
const KeyTokenService = require("./token.service");
const { createTokenPair } = require("../auth/authUtils");
const { getInfoData, generateDoubleKey } = require("../utils");
const {
  BadRequestError,
  AuthFailureError,
  ForbiddenError,
} = require("../core/error.response");
const tourModel = require("../models/tour.model");

class TourService {

  static createTour = async (payload) => {
    try {
    const { name} = payload;
    const newTour = await tourModel.create(payload);
    return newTour
    } catch (error) {
      return {
        code: "xxx",
        message: error.message,
        status: "error",
      };
    }
  };

  static updateTour = async (payload) => {
  try {
    if (!payload._id) {
      throw new BadRequestError("Missing tour ID");
    }

    const updatedTour = await tourModel.findByIdAndUpdate(
      payload._id,
      payload,
      { new: true } // Trả về document sau khi cập nhật
    );

    if (!updatedTour) {
      throw new BadRequestError("Tour not found");
    }

    return updatedTour;
  } catch (error) {
    throw new Error(`Error updating tour: ${error.message}`);
  }
};


static deleteTour = async (id) => {
  try {
    if (!id) {
      throw new BadRequestError("Missing tour ID");
    }

    const deletedTour = await tourModel.findByIdAndDelete(id);

    if (!deletedTour) {
      throw new BadRequestError("Tour not found");
    }

    return deletedTour;
  } catch (error) {
    throw new Error(`Error deleting tour: ${error.message}`);
  }
};



  static getTourById = async (id) => {
  try {
    if (!id) {
      throw new BadRequestError("Missing tour ID");
    }

    const tour = await tourModel.findById(id);
    if (!tour) {
      throw new BadRequestError("Tour not found");
    }

    return tour;
  } catch (error) {
    throw new Error(`Error fetching tour: ${error.message}`);
  }
};


  static getAllTours = async () => {
  try {
    return await tourModel.find();
  } catch (error) {
    throw new Error("Error fetching tours: " + error.message);
  }
};

}

module.exports = TourService;
