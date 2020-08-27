const router = require('express').Router()
const controller = require('../controllers/controllers')

router.post('/', controller.FetchDetails.fetchDetails)

module.exports = router