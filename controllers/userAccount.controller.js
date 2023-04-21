const AccountModel = require("../models/account.model") 

const GetUserAccounts = async (req, res) => {
    try {
        const userAccount = await AccountModel.find({})
        res.status(200).send(userAccount)
    } catch (error) {
        res.status(500).send(error)
    }
}

const AddUserAccount = async (req, res) => {
    try {

        const _userAccount = await AccountModel.findOne({ account_name: req.body.account_name })

        if (_userAccount) {
            res.status(400).send({
                messaga: 'Account name Already exist'
            })
            return
        }

        const userAccount = new AccountModel(req.body)
        await userAccount.save()
        res.status(201).send({
            message: "User account created Successfully",
            userAccount
        })

    } catch (error) {
        res.status(500).send(error)
    }
}

const PatchUserAccounts = async (req, res) => {
    try {
        const _id = req.params.id
        const _userAccount = await AccountModel.findById({ _id })

        if (!_userAccount) {
            res.status(400).send({
                "message": "AccountId is Invalid"
            })
            return
        }

        const userAccount = await AccountModel.findByIdAndUpdate({ _id }, req.body, { new: true })
        res.status(201).send({
            message: "User account updated successfully",
            userAccount
        })

    } catch (error) {
        res.status(500).send(error)
    }
}

const DeleteUserAccounts = async (req, res) => {

    try {
        const _id = req.params.id

        const _userAccount = await AccountModel.findById({ _id })

        if (!_userAccount) {
            res.status(400).send({
                message: "Invalid Id"
            })
            return
        }

        const userAccount = await AccountModel.findByIdAndDelete({ _id })
        return res.status(201).send({
            message: 'user account deleted successfully',
            userAccount
        })

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = { GetUserAccounts, AddUserAccount, PatchUserAccounts, DeleteUserAccounts }
