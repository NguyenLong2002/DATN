"use strict";

const { CREATED,DELETED, SuccessResponse, OK } = require("../core/succes.response");
const TourService = require("../services/tour.service");

class TourController {


 
  createTour = async (req, res, next) => {
  try {
    const newTour = await TourService.createTour(req.body);
    new CREATED({
      message: "Tour created successfully!",
      metadata: newTour,
    }).send(res);
  } catch (error) {
    next(error);
  }
};

  updateTour = async (req, res, next) => {
  try {
    const updatedTour = await TourService.updateTour(req.body);
    new OK({ message: "Tour updated successfully", metadata: updatedTour }).send(res);
  } catch (error) {
    next(error);
  }
};


  deleteTour = async (req, res, next) => {
  try {
    const { id } = req.params; 
    if (!id) {
      throw new Error("Missing tour ID");
    }
    const deletedTour = await TourService.deleteTour(id);
    new DELETED({
      message: "Deleted OK!",
      metadata: deletedTour,
    }).send(res);
  } catch (error) {
    next(error);
  }
};


  getTourById = async (req, res, next) => {
    try {
      const tour = await TourService.getTourById(req.params.id);
      new OK({ metadata: tour }).send(res);
    } catch (error) {
      next(error);
    }
  };

 getAllTours = async (req, res, next) => {
  try {
    const sanitizedInput = req.query.id; // Remove unwanted spaces/newlines
    const tours = await TourService.getAllTours(sanitizedInput);
    res.status(200).json({ status: "success", data: tours });
  } catch (error) {
    console.log("error")
    next(error);
  }
};



}

module.exports = new TourController();
