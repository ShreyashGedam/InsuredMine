const AgentModel = require("../models/agent.model")

const GetAgents = async (req, res) => {

    try {
        const agents = await AgentModel.find({})
        res.status(200).send(agents)

    } catch (error) {
        res.status(500).send(error)
    }
}

const AddAgents = async (req, res) => {

    try {
        const _agent = await AgentModel.findOne({ agent: req.body.agent })
        if (_agent) {
            res.status(400).send({
                message: "Agent already present"
            })
            return
        }

        const agent = new AgentModel(req.body)
        await agent.save()

        res.status(201).send(agent)

    } catch (error) {
        res.status(500).send(error.message)
    }
}

const UpdateAgent = async (req, res) => {
    try {

        const _id = req.params.id
        const agentId = await AgentModel.findById({ _id })

        if (!agentId) {
            res.status(400).send({
                message: "Agent id incorrect"
            })
            return
        }

        const agent = await AgentModel.findByIdAndUpdate({ _id }, req.body, { new: true })
        res.status(201).send({
            message: 'Agent Updated',
            agent
        })

    } catch (error) {
        res.status(500).send(error)
    }
}

const DeleteAgent = async (req, res) => {
    const _id = req.params.id

    const _agent = await AgentModel.findById({ _id })

    if (!_agent) {
        res.status(400).send({
            message: 'AgentId is Incorrct'
        })
        return
    }

    const agent = await AgentModel.findByIdAndDelete({ _id })

    res.status(200).send({
        message: "Agent deleted Successfully",
        agent
    })
}

module.exports = { GetAgents, AddAgents, UpdateAgent, DeleteAgent }