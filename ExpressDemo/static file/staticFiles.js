var express = require('express')
var app = express()
var path=require('path')

app.use('/abc', express.static(__dirname + '/assets'));

app.get('/', function(req,res){
    res.sendFile('index.html', {root: path.join(__dirname,'./files')})
})

app.listen(3000)