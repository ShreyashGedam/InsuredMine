const UserModel = require("../models/user.model")

const GetUsers = async (req, res) => {
    try {
        const user = await UserModel.find({})
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
}
 
const AddUser = async (req, res) => {
    try {

        const _user = await UserModel.findOne({ userType: req.body.userType })

        if (_user) {
            res.status(400).send({
                messaga: 'UserType Already exist'
            })
            return
        }

        const user = new UserModel(req.body)
        await user.save()
        res.status(201).send({
            message: "UserType created Successfully",
            user
        })

    } catch (error) {
        res.status(500).send(error)
    }
}

const UpdateUser = async (req, res) => {

    try {
        const _id = req.params.id
        const _user = await UserModel.findById({ _id })

        if (!_user) {
            res.status(400).send({
                "message": "UserId is Invalid"
            })
            return
        }

        const user = await UserModel.findByIdAndUpdate({ _id }, req.body, { new: true })
        res.status(201).send({
            message: "User updated successfully",
            user
        })

    } catch (error) {
        res.status(500).send(error)
    }

}

const DeleteUser = async (req, res) => {

    try {
        const _id = req.params.id

        const _user = await UserModel.findById({ _id })

        if (!_user) {
            res.status(400).send({
                message: "Invalid Id"
            })
            return
        }

        const user = await UserModel.findByIdAndDelete({ _id })
        return res.status(201).send({
            message: 'userType deleted successfully',
            user
        })

    } catch (error) {
        res.status(500).send(error)
    }

}

module.exports = { GetUsers, AddUser, UpdateUser, DeleteUser }