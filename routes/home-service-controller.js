var express = require("express");
var router = express.Router();
var HomeService = require("../models/home-services");



router.get("/admin/home-service/new", function(req, res) {
        res.render("admin/home/services-new");
    });


router.post("/test", function(req, res) {
    var title = req.body.title;
    var smalltitle = req.body.smalltitle;
    var description = req.body.description;  
   
  
    var newText = { title: title, smalltitle: smalltitle, description: description };
    
    HomeService.create(newText, function(err, NewlyCreated) {
        if (err) {
            console.log(err);
        }
        else {
            //console.log(NewlyCreated); SHOW IN TERMINAL
            res.redirect("/");
        }
    });
});


router.get("/home-service/:id/edit", function(req, res) {
    HomeService.findById(req.params.id, function(err, foundHomeService) {
        if (err) {
            console.log(err);
        }
        res.render("admin/home/services-edit", { HomeService: foundHomeService });
    });
});

router.put("/:id", function(req, res) {

    HomeService.findByIdAndUpdate(req.params.id, req.body.HomeService, function(err, updatedHomeService) {
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