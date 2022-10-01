var express = require('express');
var app = express();
var bodyparser = require("body-parser")
 app.set('views',"./views")
 app.set('view engine','ejs')
app.use(express.static("public"))
app.use(bodyparser.urlencoded({extended:false}))
app.get('/form', function(req, res){
   res.render("form.ejs");
});
app.post('./add',function(req,res){
    console.log(body.req)
    res.status(200).send({
        status:"success",
        Message:"the sum of given 2 numbers",
        sum:parseInt(req.body.num1)+parseInt(req.body.num2)

    })
    res.redirect("./");
})
app.post('./sub',function(req,res){
    res.status(200).send({
        status:"success",
        Message:"the diff of given 2 numbers",
        sum:parseInt(req.body.num1)-parseInt(req.body.num2)

    })
    res.redirect("./");
})
app.post('./mult',function(req,res){
    res.status(200).send({
        status:"success",
        Message:"the mult of given 2 numbers",
        sum:parseInt(req.body.num1)*parseInt(req.body.num2)

    })
    res.redirect("./");
})
app.post('./div',function(req,res){
    res.status(200).send({
        status:"success",
        Message:"the div of given 2 numbers",
        sum:parseInt(req.body.num1)/parseInt(req.body.num2)

    })
    res.redirect("./");
})
app.listen(3000, ()=>{
console.log("servsesr")
});