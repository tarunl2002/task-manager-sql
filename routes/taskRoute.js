const express = require('express'); 
const router = express.Router(); 
const { createDB } = require('../Controllers/task');


router.get('/create/database', createDB)

module.exports = router