const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PlaylistSchema = new Schema({
  name: String,
  songs: Array,
  owner: String,
  contstituents: Array

})

module.exports = mongoose.model('Playlist', PlaylistSchema)
