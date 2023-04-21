const LobModel = require("../models/lob.model")

const GetLob = async (req, res) => {
    try {
        const category = await LobModel.find({})
        res.status(200).send(category)

    } catch (error) {
        res.status(500).send(error)
    }
}
 
const AddLob = async (req, res) => {
    try {

        const category = await LobModel.findOne({ category_name: req.body.category_name })

        if (category) {
            res.status(400).send({
                messaga: 'Category name Already exist'
            })
            return
        }

        const lob = new LobModel(req.body)
        await lob.save()
        res.status(201).send({
            message: "LOB created Successfully",
            lob
        })

    } catch (error) {
        res.status(500).send(error)
    }
}

const UpdateLob = async (req, res) => {
    try {
        const _id = req.params.id
        const _category = await LobModel.findById({ _id })

        if (!_category) {
            res.status(400).send({
                "message": "LOB Id is Invalid"
            })
            return
        }

        const category = await LobModel.findByIdAndUpdate({ _id }, req.body, { new: true })
        res.status(201).send({
            message: "LOB updated successfully",
            category
        })

    } catch (error) {
        res.status(500).send(error)
    }
}

const DeleteLob = async (req, res) => {

    try {
        const _id = req.params.id

        const _category = await LobModel.findById({ _id })

        if (!_category) {
            res.status(400).send({
                message: "Invalid Id"
            })
            return
        }

        const category = await LobModel.findByIdAndDelete({ _id })
        return res.status(201).send({
            message: 'LOB deleted successfully',
            category
        })

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = { GetLob, AddLob, UpdateLob, DeleteLob }