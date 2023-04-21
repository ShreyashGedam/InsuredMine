const { Router } = require("express");
const { GetLob, AddLob, UpdateLob, DeleteLob } = require("../controllers/lob.controller");

const lobRouter = Router()

lobRouter.get("/getLob", GetLob)
 
lobRouter.post("/addLob", AddLob)

lobRouter.patch("/updateLob/:id", UpdateLob)

lobRouter.delete("/deleteLob/:id", DeleteLob)
 
module.exports = lobRouter