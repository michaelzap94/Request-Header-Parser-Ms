var express = require("express");
var app = express();

app.get("/",function(req,res){
 
     var apiObj = {
         'ip-address': req.headers['x-forwarded-for'] || req.connection.remoteAddress,
         'language': req.headers["accept-language"].split(",")[0],
         'software':  req.headers['user-agent'].split("(")[1].split(")")[0]
     };
        res.send(apiObj);
});



app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The YelpCamp Server Has Started!");
});