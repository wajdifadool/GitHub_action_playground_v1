const express = require('express')
const { getSample, getSamples } = require('../controllers/sample')
const router = express.Router()

router.get('/', getSample)
router.get('/samples', getSamples)

module.exports = router
