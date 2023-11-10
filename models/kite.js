const mongoose = require("mongoose")
const kiteSchema = mongoose.Schema({
 kite_color: String,    
kite_name: String,
kite_price: Number
})
module.exports = mongoose.model("kite", kiteSchema);