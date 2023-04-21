const { Router } = require("express");
const { GetUsers, AddUser, UpdateUser, DeleteUser } = require("../controllers/user.controller");

const userRouter = Router()

userRouter.get("/getUserType", GetUsers)

userRouter.post("/addUserType", AddUser)

userRouter.patch("/updateUserType/:id", UpdateUser)

userRouter.delete("/deleteUserType/:id", DeleteUser)

module.exports = userRouter 