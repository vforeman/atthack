//ec2-54-172-65-28.compute-1.amazonaws.com

var express = require('express'),
	app = express(),
	bodyParser = require('body-parser');

/*MONGODB AND MONGOOSEJS*/

//load the module
var mongoose = require('mongoose/');
// mongoose.connect('mongodb://54.172.65.28:27017/mentorUS');
// var Schema = mongoose.Schema;
// var UserDetails = new Schema({
// 	firstName:	String,
// 	lastName: String,
// 	eMail: String
// 	},	{

// 	});



app.use(bodyParser());
app.use(express.static(__dirname+'/public'));
/*ROUTES*/
app.get('/',function(req,res){
	res.sendfile('index.html');
});
app.get('/signin',function(req,res){
	res.sendfile('public/signin.html');
});
app.get('/mentor',function(req,res){
	res.sendfile('public/mentor.html');
});
app.get('/parent',function(req,res){
	res.sendfile('public/parent.html');
});
app.post('/signin',function(req,res){
	console.log(req.body.name);
	res.redirect('/profilehome');
});
app.get('/profilehome',function(req,res){
	res.sendfile('public/profilehome.html');
});

/*LISTEN*/
app.listen(5000,function(){
	console.log('listening on port 5000');
});




