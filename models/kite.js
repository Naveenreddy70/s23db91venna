

const mongoose = require("mongoose")
const kiteSchema = mongoose.Schema({
    kite_color: String, 
    kite_name:  {type: String,maxLength: 15},
    kite_price: {type: Number,min: 0,max: 200}
})
module.exports = mongoose.model("kite",kiteSchema)