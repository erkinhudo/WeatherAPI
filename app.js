const express = require ("express");
const { Http2ServerResponse } = require("http2");
const https  =  require ("https");

const app = express();


app.get("/",function(req,res){
    
    const url = "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=30&lon=-20&zoom=5"
    
    https.get(url,function(response){
        console.log(response);
    });
     
    res.send("Server is up and running");
});




app.listen(3000,function(){
    console.log("Server is running on port 3000.");
});