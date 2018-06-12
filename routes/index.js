var express = require("express");
var router = express.Router();
var Home = require("../models/home-text");


router.get("/", function(req, res) {

    Home.find({}, function(err, homeText) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("index", { Home: homeText });           
           
        }
    });
});

router.get("/about-us", function(req, res) {
    res.render('about-us');
    
});

router.get("/services", function(req, res) {
    res.render('services');
});

router.get("/offers", function(req, res) {
    res.render('offers');
});

router.get("/contact-us", function(req, res) {
    res.render('contact-us');
});

module.exports = router;
