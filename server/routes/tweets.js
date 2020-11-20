const express = require("express");

const router = express.Router()

//get all
router.get('/', (req,res)=> {
  model.getAll('users')
    .then(users => {res.status(200).json(users)})
    .catch(err => {res.status(500).json(err)})
})

//get single by id
router.get('/:id', (req,res)=> {
  model.findById('users', req.params.id)
    .then(user => {res.status(200).json(user)})
    .catch(err => {res.status(500).json(err)})
})


router.get('/all',/* mdwr.restricted,*/ (req,res) => {
  model.getAll('users')
    .then(users => {res.json(users)})
    .catch(err => {res.status(500).json(err);});
})

module.exports = router;
