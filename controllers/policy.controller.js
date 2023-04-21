const PolicyModel = require("../models/policy.model")

const GetPolicy = async (req, res) => {
    try {
        const policy = await PolicyModel.find({})
        res.status(200).send(policy)
    } catch (error) {
        res.status(500).send(error)
    }
}

const AddPolicy = async (req, res) => {

    try {

        const _policy = await PolicyModel.findOne({ userType: req.body.policy_number })

        if (_policy) {
            res.status(400).send({
                messaga: 'Policy number Already exist'
            })
            return
        }

        const policy = new PolicyModel(req.body)
        await policy.save()
        res.status(201).send({
            message: "Policy created Successfully",
            policy
        })

    } catch (error) {
        res.status(500).send(error)
    }
}

const UpdatePolicy = async (req, res) => {

    try {
        const _id = req.params.id
        const _policy = await PolicyModel.findById({ _id })

        if (!_policy) {
            res.status(400).send({
                "message": "UserId is Invalid"
            })
            return
        }

        const policy = await PolicyModel.findByIdAndUpdate({ _id }, req.body, { new: true })
        res.status(201).send({
            message: "Policy updated successfully",
            policy
        })

    } catch (error) {
        res.status(500).send(error)
    }

}

const DeletePolicy = async (req, res) => {

    try {
        const _id = req.params.id

        const _policy = await PolicyModel.findById({ _id })

        if (!_policy) {
            res.status(400).send({
                message: "Invalid Id"
            })
            return
        }

        const ploicy = await PolicyModel.findByIdAndDelete({ _id })
        return res.status(201).send({
            message: 'Policy deleted successfully',
            ploicy
        })

    } catch (error) {
        res.status(500).send(error)
    }

}

module.exports = { GetPolicy, AddPolicy, UpdatePolicy, DeletePolicy }  