const express = require ("express");

const app = express();


app.get("/",function(req,res){
    res.send("Server is up and running");
});

app.post("/",function(req,res){

    req. 
})





app.listen(3000,function(){
    console.log("Server is running on port 3000.");
});