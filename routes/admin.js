var express = require("express");
var router = express.Router();

router.get("/", function(res, res) {	
    res.render("admin/index");
});

module.exports = router;