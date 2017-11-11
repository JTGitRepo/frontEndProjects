var express = require("express");
var app = express();
app.use(express.static("public"));

// set view engine to ejs
app.set("view engine", "ejs")

app.get("/", function(req, res){
	res.render("index")
})

app.listen(3000, function(){
	console.log("Expample app listening on port 3000!")
})