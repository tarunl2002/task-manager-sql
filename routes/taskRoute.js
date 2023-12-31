const express = require('express'); 
const router = express.Router(); 
const { createDB, createTable, createList, showTasks, singleTask, updateTask, deleteSingleTask } = require('../Controllers/task');


router.get('/create/database', createDB)
router.get('/create/table', createTable)
router.post('/create/list', createList) 
router.get('/show/tasks', showTasks) 
router.get('/task/:id', singleTask) 
router.put('/update/task/:id', updateTask) 
router.delete('/delete/task/:id', deleteSingleTask) 

module.exports = router