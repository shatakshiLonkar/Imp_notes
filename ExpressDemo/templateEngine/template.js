var express = require('express')
var app = express()
app.set('views',  path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  })

  app.listen(5000)