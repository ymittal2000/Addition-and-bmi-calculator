// jshint esversion:6
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});


app.post("/", function(req,res){
  var n1= Number(req.body.num1);
  var n2= Number(req.body.num2);
  res.send("The result of the calculation is " + (n1+n2));
});

app.get("/bmicalculator" , function(req,res){
  res.sendFile(__dirname + "/bmi.html");
});

app.post("/bmicalculator", function(req,res){
  var w = Number(req.body.weight);
  var h = Number(req.body.height);
  var result= Math.round(w/(Math.pow(h,2)));
  res.send("The BMI is " + result);
});

app.listen(3000, function(){
  console.log("Server started");
})
