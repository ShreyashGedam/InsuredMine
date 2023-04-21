const { Router } = require("express");
const { GetPolicy, AddPolicy, UpdatePolicy, DeletePolicy } = require("../controllers/policy.controller");

const policyRouter = Router()

policyRouter.get("/getPolicy", GetPolicy)

policyRouter.post("/addPolicy", AddPolicy)

policyRouter.patch("/updatePolicy/:id", UpdatePolicy)

policyRouter.delete("/deletePolicy/:id", DeletePolicy)

module.exports = policyRouter   