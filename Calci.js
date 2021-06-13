const express=require("express");
const bodyParser=require("body-parser")
const app=express();


app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
   res.sendFile(__dirname+"/index.html");
});
app.get("/about",function(req,res){
    res.send("Hi there");
 });
app.use("/",function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1+num2;
    
    res.send("Result is "+result);

   res.send("Thanks for posting");
});
app.listen(3000,function(req,res){
    console.log("server started");
})


