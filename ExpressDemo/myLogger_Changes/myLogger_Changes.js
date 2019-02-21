var express = require('express')
var app = express()

var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)

app.get('/', function (req, res, next) {
  res.send('Hello World!')
  next()
 })
 app.get('/about', function (req, res,next ) {
    res.send('Hello About World!')
    next()
     })
 app.get('/mypage', function (req, res ) {
        res.send('Hello my page!')
        
         })

app.listen(3000)