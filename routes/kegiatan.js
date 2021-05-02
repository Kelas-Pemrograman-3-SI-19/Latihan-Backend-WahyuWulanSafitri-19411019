const router = require('express').Router()
const kegiatanController = require('../controller/kegiatan')

router.get('/insert', (req, res) => {
    kegiatanController.create(req.body)
        .then(result => res.json(result))
        .cacth(err => res.json(err))
})

router.post('/getAll', (req, res) => {
    kegiatanController.getAll(req.body)
        .then(result => res.json(result))
        .cacth(err => res.json(err))
})

router.get('/getbyid/:id', (req, res) => {
    kegiatanController.getById(req.params.id)
    .then(result =>res.json(result))
    .cacth(err => res.json(err))
})

router.put('/update/:id', (req, res) => {
    kegiatanController.update(req.params.id, req.body)
    .then(result =>res.json(result))
    .cacth(err => res.json(err))
})

router.delete('/delete/:id', (req, res) => {
    kegiatanController.delete(req.params.id)
    .then(result =>res.json(result))
    .cacth(err => res.json(err))
})
module.exports = router
