var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

app.use(bodyParser.json())
var cors = require('cors')
const db = require('./app/db.config');
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors());

app.options('*', cors());
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync with { force: true }');
// });
 
require('./routes/main.route')(app);

app.get('/',  (req,res)=>{
	res.sendFile(path.join(__dirname, 'public/tempview/index.html'))
})

app.get('/register',  (req,res)=>{
	res.sendFile(path.join(__dirname, 'public/tempview/register.html'))
})
app.get('/login',  (req,res)=>{
	res.sendFile(path.join(__dirname, 'public/tempview/login.html'))
})
app.get('/productdetails',  (req,res)=>{
	res.sendFile(path.join(__dirname, 'public/tempview/productdetail.html'))
})
app.get('/gridlist',  (req,res)=>{
	res.sendFile(path.join(__dirname, 'public/tempview/gridlist.html'))
})
app.get('/listlist',  (req,res)=>{
	res.sendFile(path.join(__dirname, 'public/tempview/listlist.html'))
})
app.get('/postad',  (req,res)=>{
	res.sendFile(path.join(__dirname, 'public/tempview/postad.html'))
})
app.get('/categories',  (req,res)=>{
	res.sendFile(path.join(__dirname, 'public/tempview/categories.html'))
})
app.get('/userprofile',  (req,res)=>{
	res.sendFile(path.join(__dirname, 'public/tempview/userprofile.html'))
})

app.get("*", (req,res)=>{
	res.sendFile(path.join(__dirname, 'public/tempview/index.html'))
})

 
// Create a Server
var server = app.listen(process.env.PORT || 3000, function () {
 
  var host = 'localhost'
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})