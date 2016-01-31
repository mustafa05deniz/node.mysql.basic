var express = require('express');
var app = express();
var mysql  = require('mysql');

app.use(express.static(__dirname + '/'));

app.set('view engine', 'ejs');  // use view engine to ejs 

	


var connection = mysql.createConnection({
  host     : '',
  user     : '',
  password : '',
  database : ''
});

connection.connect();


app.get('/',function(req,res){


	var row = [];  // create a list

	 connection.query('SELECT * FROM table_name', function (err, rows) { // open query 
        if (err) {
            console.log(err);
        } else {
            if (rows.length) {
                for (var i = 0, len = rows.length; i < len; i++) {

                    row[i] = rows[i];  // pushing list all veriable from sending mysql server 
                    console.log(row);  // write the console 
                }
                
            }
        }
        res.render('index',{rows:row}) // post index page and its all veriables name is rows 
    })
	

});

app.listen(80);