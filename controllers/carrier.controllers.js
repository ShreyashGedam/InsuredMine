const CarriertModel = require("../models/carrier.model")

const GetCarrier = async (req, res) => {
    try {
        const company = await CarriertModel.find({})
        res.status(200).send(company)

    } catch (error) {
        res.status(500).send(error)
    }
}

const AddCarrier = async (req, res) => {
    try {

        const _company = await CarriertModel.findOne({ company_name: req.body.company_name })

        if (_company) {
            res.status(400).send({
                messaga: 'Company name Already exist'
            })
            return
        }

        const company = new CarriertModel(req.body)
        await company.save()
        res.status(201).send({
            message: "Carrier data created Successfully",
            company
        })

    } catch (error) {
        res.status(500).send(error)
    }
}

const UpdateCarrier = async (req, res) => {
    try {
        const _id = req.params.id
        const _company = await CarriertModel.findById({ _id })

        if (!_company) {
            res.status(400).send({
                "message": "Company Id is Invalid"
            })
            return
        }

        const company = await CarriertModel.findByIdAndUpdate({ _id }, req.body, { new: true })
        res.status(201).send({
            message: "Company data updated successfully",
            company
        })

    } catch (error) {
        res.status(500).send(error)
    }
}

const DeleteCarrier = async (req, res) => {

    try {
        const _id = req.params.id

        const _company = await CarriertModel.findById({ _id })

        if (!_company) {
            res.status(400).send({
                message: "Invalid Id"
            })
            return
        }

        const company = await CarriertModel.findByIdAndDelete({ _id })
        return res.status(201).send({
            message: 'Company deleted successfully',
            company
        })

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = { GetCarrier, AddCarrier, UpdateCarrier, DeleteCarrier }