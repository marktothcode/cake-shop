var express = require("express");
var router = express.Router();
var Home = require("../models/home-text");
var path;

router.get("/", function(req, res) {

    Home.find({}, function(err, homeText) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("index", { Home: homeText, path:req.path });           
           
        }
    });
});

router.get("/about-us", function(req, res) {
    res.render('about-us', {path : req.path});
    
});

router.get("/services", function(req, res) {
    res.render('services', {path : req.path});
});

router.get("/offers", function(req, res) {
    res.render('offers', {path : req.path});
});

router.get("/contact-us", function(req, res) {
    res.render('contact-us', {path : req.path} );
});

module.exports = router;
