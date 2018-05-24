var express = require("express");
var router = express.Router();
var Home = require("../models/home-text");



router.get("/admin/new", function(req, res) {
        res.render("admin/home/welcome-new");
    });


router.post("/", function(req, res) {
    var topTitle = req.body.topTitle;
    var topSmallTitle = req.body.topSmallTitle;
    var topDescription = req.body.topDescription;
    var bottomTitle = req.body.bottomTitle;
    var bottomSmallTitle = req.body.bottomSmallTitle;
    var bottomDescription = req.body.bottomDescription;
   
  
    var newText = { topTitle: topTitle, topSmallTitle: topSmallTitle, topDescription: topDescription, bottomTitle: bottomTitle, bottomSmallTitle: bottomSmallTitle, bottomDescription: bottomDescription };
    
    Home.create(newText, function(err, NewlyCreated) {
        if (err) {
            console.log(err);
        }
        else {
            //console.log(NewlyCreated); SHOW IN TERMINAL
            res.redirect("/");
        }
    });
});


router.get("/:id/edit", function(req, res) {
    Home.findById(req.params.id, function(err, foundHome) {
        if (err) {
            console.log(err);
        }
        res.render("admin/home/welcome-edit", { Home: foundHome });
    });
});

router.put("/:id", function(req, res) {

    Home.findByIdAndUpdate(req.params.id, req.body.Home, function(err, updatedHome) {
        if (err) {
            alert('ERROR');
            console.log(err);
        }
        else {
            res.redirect("/");
        }
    });
});

module.exports = router;