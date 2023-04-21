const { Router } = require("express");
const { GetCarrier, AddCarrier, UpdateCarrier, DeleteCarrier } = require("../controllers/carrier.controllers");
  
const carrierRouter = Router()

carrierRouter.get("/getCarrier", GetCarrier)

carrierRouter.post("/addCarrier", AddCarrier)

carrierRouter.patch("/updateCarrier/:id", UpdateCarrier)

carrierRouter.delete("/deleteCarrier/:id", DeleteCarrier)

module.exports = carrierRouter