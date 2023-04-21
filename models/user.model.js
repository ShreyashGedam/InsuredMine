const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    userType: String,
    producer: String,
    premium_amount_written: String,
    premium_amount: String,
    csr: String,
    email: String,
    gender: String,
    firstname: String,
    city: String,
    phone: String,
    address: String,
    state: String,
    zip: String,
    dob: String,
})

const UserModel = mongoose.model("user", userSchema)

module.exports = UserModel