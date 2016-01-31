
#nodejs and mysql basic introduction 
### # instalition
'''
npm install express

npm install mysql 

npm install ejs 
'''

### # connection 

'''
var connection = mysql.createConnection({
  host     : 'mysql server ip adress / if you run local server : localhost ',
  user     : 'root',
  password : 'mysql server password',
  database : 'mysql server database name'
});

connection.connect();

'''

### # request and response 

'''
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

'''

### # send data 
=======
#nodejs and mysql basic introduction 
### # instalition

### # connection 

### # request and response 

### # send data 

