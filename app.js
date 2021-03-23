const express = require ("express");
const { Http2ServerResponse } = require("http2");
const https  =  require ("https");

const app = express();


app.get("/",function(req,res){
    
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=4dc03f387f1e6b69c0d62b2d72187bbe"
    
    https.get(url, function(response){

        console.log(response.statusCode);
      
      
      
        response.on("data", function(data){
      
          const weatherData = JSON.parse(data);
      
          const temp = weatherData.main.temp;
      
          const weather = weatherData.weather[0].description;

          const icon = weatherData.weather[0].icon;
          const imageURL = "http://openweathermap.org/img/wn/10d@2x.png"
          res.write("<p>The weather is currently " + weather+"</p>");
          
          res.write("<h1>The Temperature in Paris is " + temp + " F.</h1>");
           
          res.write ("<img src="+imageURL + ">")
          res.send();
      
        });
      
      });
      
      
     
    // res.send("Server is up and running");
});




app.listen(3000,function(){
    console.log("Server is running on port 3000.");
});