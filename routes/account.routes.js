const { Router } = require("express");
const { GetUserAccounts, AddUserAccount, PatchUserAccounts, DeleteUserAccounts } = require("../controllers/userAccount.controller");

const accountRoute = Router()

accountRoute.get("/getAccount", GetUserAccounts)

accountRoute.post("/addAccount", AddUserAccount)

accountRoute.patch("/updateAccount/:id", PatchUserAccounts)

accountRoute.delete("/deleteAccount/:id", DeleteUserAccounts)

module.exports = accountRoute  