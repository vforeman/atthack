//ec2-54-172-65-28.compute-1.amazonaws.com


var express = require('express'),
	app = express(),
	bodyParser = require('body-parser');

/*MONGODB AND MONGOOSEJS*/

//load the module
// var mongoose = require('mongoose/');
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

/*MONGODB AND MONGOOSEJS*/

//load the module
var mongoose = require('mongoose');
//connect to the database
mongoose.connect('mongodb://54.172.65.28:27017/mentorUS');
var Schema = mongoose.Schema;
//create schema and create module
var mentorSchema = new Schema
   ({
 		firstName: String,
 		lastName: String,
 		streetLine1: String,
 		streetLine2: String,
 		city: String,
        state: String,
        zipcode: String,
	   	Miles: String,
	    age: String,
	    educationLevel: String,
	    career: String,
	    sports: String,
	    hobbies: String,
        familyEconomicBackground: String,
	    socialMedia: String,
	    eMail: String,
	    economicBackgroundYouth: String,
	    activitiesForMentee: String,
	    servicesForMentee: String,
	    maxMentees: String,
	    availability: String
 	});
mentorSchema.methods.savelog = function(){
	var log = this.firstName;
	console.log('mentor \"'+log + '\" was saved');
}
var mentor = mongoose.model('mentor', mentorSchema);

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

app.post('/mentor', function(req,res){
	var newMentor = new mentor({ firstName: req.body.firstname, lastName: req.body.lastname });
 	newMentor.save(function(err){
 		this.savelog();
 	});
 //    newMentor.save(function(err, entry) {
 //  if(err) {
 //    console.log(err);
 //    res.send(500, { error: err.toString()});
 //  } 
 //  else {
 //    console.log('New product has been posted.');        
 //  }
 console.log(newMentor);
 res.redirect('/mentor');
// });
});


/*LISTEN*/
app.listen(5000,function(){
	console.log('listening on port 5000');
});




// var UserDetails = mongoose.model('userInfo', UserDetail);


/*this.addAddress = function (req, res) {
    var newAddress = {
           firstName: req.body.firstname,
           lastName: req.body.lastname,
	   	   streetLine1: req.body.address,
           streetLine2: req.body.address2,
	   	   city: req.body.city,
           state: req.body.state,
           zipcode: req.body.zip,
	   	   Miles: rec.body.miles,
	       age: req.body.age,
	       educationLevel: req.body.education,
	       career: req.body.career,
	       sports: req.body.sports,
	       hobbies: req.body.hobbies,
           familyEconomicBackground: req.body.familyEconmicBackground,
	       socialMedia: req.body.social,
	       eMail: req.body.email,
	       economicBackgroundYouth: rec.body.ecoYouth,
	       activitiesForMentee: rec.body.activites,
	       servicesForMentee: rec.body.services,
	       maxMentees: rec.body.max_mentees,
	       availability: rec.body.availability
    }
    mentor.update({username: req.session.user}, { $push : {
            address: newAddress
        }}, {upsert: true}, function ( err ) {
                if(err){
                        console.log(err);
                }else{
                        console.log("Successfully added");
                }
        })
}*/



