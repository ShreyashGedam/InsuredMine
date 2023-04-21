const { default: mongoose } = require("mongoose");

const AccountSchema = mongoose.Schema({ 
    account_name: { type: String, required: true },
    account_type: { type: String, required: true }
})

const AccountModel = mongoose.model("account", AccountSchema)

module.exports = AccountModel 