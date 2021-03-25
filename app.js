const express = require ("express");
const { Http2ServerResponse } = require("http2");
const https  =  require ("https");
const bodyParser = require ("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true }));
app.get("/",function(req,res){
    
   res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
    

  const query = req.body.cityName;
const apiKey = "4dc03f387f1e6b69c0d62b2d72187bbe"

  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid="+apiKey + "";
  
  https.get(url, function(response){

      console.log(response.statusCode);
    
    
    
      response.on("data", function(data){
    
        const weatherData = JSON.parse(data);
    
        const temp = weatherData.main.temp;
    
        const weather = weatherData.weather[0].description;

        const icon = weatherData.weather[0].icon;
        const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png"
        res.write("<p>The weather is currently " + weather+"</p>");
        
        res.write("<h1>The Temperature in "+query+" is " + temp + " F.</h1>");
         
        res.write ("<img src="+imageURL + ">")
        res.send();
        
      });
    
    });
});


    
    
   



app.listen(3000,function(){
    console.log("Server is running on port 3000.");
});