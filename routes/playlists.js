const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const parseUrlencoded = bodyParser.urlencoded({ extended: true })
const Playlist = require('../app/models/playlist')

router.route('/')
 .post((req, res) => {
   const playlist = new Playlist()
   playlist.name = req.body.name
   playlist.save(err => {
     if (err){
       res.send(err)
     }
     res.json({messeage: 'Playlist created'})
   })
 })
 .get((req, res) => {
   Playlist.find((err, playlists) => {
     if (err){
       res.send(err)
     }
     res.send(playlists)
   })
 })

router.route('/:playlist_id')
 .get((req, res) => {
   Playlist.findById(req.params.playlist_id, (err, playlist) => {
     if(err) {
       res.send(err)
     }
     res.send(playlist)
   })
 })

module.exports = router
