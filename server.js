var express = require('express'),
	app = express();

app.use(express.static(__dirname+'/public'));
app.get('/',function(req,res){
	res.sendfile('index.html');
});

app.listen(5000,function(){
	console.log('listening on port 5000');
});

