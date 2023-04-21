const mongoose = require("mongoose");

const agentScheam = mongoose.Schema({ 
    agent: { type: String, required: true }
})

const AgentModel = mongoose.model("agent", agentScheam)

module.exports = AgentModel 