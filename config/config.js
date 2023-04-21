const { default: mongoose } = require("mongoose");

const connection = mongoose.connect("mongodb://localhost:27017/InsuredMine")
// const connection = mongoose.connect("mongodb://127.0.0.1:27017/InsuredMine")

module.exports = connection