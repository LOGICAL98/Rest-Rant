const { route } = require('express/lib/application')

const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
  res.send('GET /places stub')
})
router.post('/', (req, res) => {
  res.send('POST /places stub')
})
router.get('/new', (req, res) => {
  res.render('places/new')
})
router.put('/:id', (req, res) => {
  res.send('GET/places/:id stub')
})
router.put('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})
router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})
router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/:rantId stub')
})
router.delete('/:id/rant/:rantId', (req, res) => {
  res.send('GET /places/:id/rant/:rantId stub')
})
module.exports = router