const { default: mongoose } = require("mongoose");

const LobSchema = mongoose.Schema({
    category_name: { type: String, required: true },
})
 
const LobModel = mongoose.model("lob", LobSchema)

module.exports = LobModel