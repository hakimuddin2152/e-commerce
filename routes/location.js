const Location = require('../models/location')
const express = require('express');
const locationRoutes = express.Router();

locationRoutes.route('/getlocation').post(function (req, res) {
console.log('hello location route')
    console.log(req.body)
    let cordinates = new Location({
        latitude: req.body.latitude,
        longitude: req.body.longitude,
    }); 
    Location.getLocation(cordinates,function(err,loc){
    res.json(loc)
    })
    
    
})

locationRoutes.route('/getcity').get(function(re,res){

})

module.exports = locationRoutes;