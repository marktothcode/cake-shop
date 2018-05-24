var mongoose = require("mongoose");


var HomeTextSchema = new mongoose.Schema ({
    topTitle: String,
    topSmallTitle: String,
    topDescription: String,
    bottomTitle: String,
    bottomSmallTitle: String,
    bottomDescription: String

});



module.exports = mongoose.model("Home", HomeTextSchema);
