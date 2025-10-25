const express = require('express')
const { getSample, getSamples, postSample } = require('../controllers/sample')
const router = express.Router()

router.get('/', getSample)
router.post('/', postSample)
router.get('/samples', getSamples)

module.exports = router

router
