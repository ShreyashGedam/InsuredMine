const { Router } = require("express");
const { GetAgents, AddAgents, UpdateAgent, DeleteAgent } = require("../controllers/agent.controller");

const agentRoute = Router()

agentRoute.get("/getAgents", GetAgents) 

agentRoute.post("/addAgents", AddAgents)

agentRoute.patch("/updateAgent/:id", UpdateAgent)

agentRoute.delete("/deleteAgent/:id", DeleteAgent)

module.exports = agentRoute