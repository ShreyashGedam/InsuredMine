const { default: mongoose } = require("mongoose");

const PolicySchema = mongoose.Schema({
    policy_mode: { type: String, required: true },
    policy_number: { type: String, required: true },
    policy_type: { type: String, required: true },
    policy_start_date: { type: String, required: true },
    policy_end_date: { type: String, required: true },
})

const PolicyModel = mongoose.model("policy", PolicySchema)

module.exports = PolicyModel 