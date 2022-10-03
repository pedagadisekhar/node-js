const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(express.static("public"))
app.use(bodyparser.urlencoded({extended:false}))
app.set('views', './views');
app.set('view engine', 'ejs');

app.get("/",(req,res)=>{
    console.log("server")
    res.render("form")
})
app.post('/add',(req,res)=>{
    console.log(req.body)
    let output = {}
    output["status"] = "success"
    output["message"] = "add"
    output["sum"] = parseInt(req.body.num1)+parseInt(req.body.num2)
    console.log(output)
    res.status(200).render("add",{output})
    
})
app.post('/sub',(req,res)=>{
    console.log(req.body)
    let output = {}
    output["status"] = "success"
    output["message"] = "add"
    output["sub"] = parseInt(req.body.num1)-parseInt(req.body.num2)
    console.log(output)
    res.status(200).render("sub",{output})
})
app.post('/div',(req,res)=>{
    console.log(req.body)
    let output = {}
    output["status"] = "success"
    output["message"] = "mult"
    output["div"] = parseInt(req.body.num1)/parseInt(req.body.num2)
    console.log(output)
    res.status(200).render("div",{output})
})
app.post('/mult',(req,res)=>{
    console.log(req.body)
    let output = {}
    output["status"] = "success"
    output["message"] = "mult"
    output["mult"] = parseInt(req.body.num1)*parseInt(req.body.num2)
    console.log(output)
    res.status(200).render("mult",{output})
})
app.listen(3000,()=>{
    console.log("server running")
})