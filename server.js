const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = express.Router()
const mongoose = require('mongoose')
const port = process.env.PORT || 8080
const playlists = require('./routes/playlists')

mongoose.connect('mongodb://localhost/tuneup')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/v1',router)
router.use('/playlists', playlists)

app.set('view engine', 'ejs');

app.get('*', function(req, res){
  res.sendFile('./index.html'));
})

app.listen(port)
console.log('tuneUp on port ' + port)
