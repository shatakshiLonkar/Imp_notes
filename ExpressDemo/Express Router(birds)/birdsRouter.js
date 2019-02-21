const express = require('express')
const app = express()
var birds = require('./birds')

// ...
app.use('/', birds);
app.listen(3000);