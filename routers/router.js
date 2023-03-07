const express = require('express')
const router = express.Router()

const fuction = require('../controllers/controllers')

router.get('/', fuction.projectname);


module.exports = router
       