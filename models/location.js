const mongoose     = require('mongoose');
const config = require('../config/database');
var NodeGeocoder = require('node-geocoder');
const LocationSchema = mongoose.Schema(
    {
        latitude:String,
        longitude:String,
        city:String,
        state:String,
        country:String,
        pincode:String,
    }
)

const Location = module.exports = mongoose.model('Location',LocationSchema);
module.exports.getLocation=function(cordinates,callback){
    
    var options = {
        provider: 'google',
        httpAdapter: 'https', // Default
        apiKey: 'AIzaSyDlxamg4IuYOwFrSt43e9rrpbVbGf3UYEY', // for Mapquest, OpenCage, Google Premier
        formatter: 'json' // 'gpx', 'string', ...
      };
      
    var geocoder = NodeGeocoder(options);
    geocoder.reverse({lat:cordinates.latitude, lon:cordinates.longitude}, callback)
    
}