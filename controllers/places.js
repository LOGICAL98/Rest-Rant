const { route } = require('express/lib/application')

const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
  res.render('places/index', { places })
})
router.get('/new', (req, res) => {
  res.render('places/new')
})
router.delete('/places/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
    res.redirect(`/places/${id}`)
  }
})
router.post('/', (req, res) => {
  if (!req.body.pic){
    req.body.pic = 'public/images/abstract.jpg'
  }
  if (!req.body.city){
    req.body.city='Anytown'
  }
  if (!req.body.state) {
    req.body.state ='USA'
  }
  places.push(req.body)
  res.redirect('/places')
})



module.exports = router