
const { default: mongoose } = require("mongoose");
 
const CarrierSchema = mongoose.Schema({
    company_name: { type: String, required: true }
})

const CarriertModel = mongoose.model("carrier", CarrierSchema)

module.exports = CarriertModel