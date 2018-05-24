var mongoose = require("mongoose");


var HomeServiceSchema = new mongoose.Schema ({
    title: String,
    smalltitle: String,
    description: String
});

module.exports = mongoose.model("HomeService", HomeServiceSchema);
