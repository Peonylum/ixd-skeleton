const express = require('express');
const router = express.Router();
var data = require('../tasks.json');


router.post('/', (req, res) => {

    // Set the creator of the task
    let creator;
    if (req.body.creator === undefined) {
      creator = "@You";
    } else {
      creator = req.body.creator;
    }
  
    // Used this to figure out how to uppercase first letter:
    // https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
    let priority = req.body.priority.charAt(0).toUpperCase() + req.body.priority.slice(1);
  
    // Add tasks to array
    data.tasks.push({
      "name": req.body.name,
      "dscrp": req.body.dscrp,
      "creator": creator,
      "assign": req.body.assign,
      "priority": priority,
      "calendar": req.body.calendar,
      "completed": false,
      "id": Date.now()
    });
    
    res.render('home', data);
});


router.delete('/:taskId', (req, res) => {
  
    // Find the index of the task to delete
    let deleteIndex;
    data.tasks.forEach((obj, index) => {

        // obj.id is a number and req.params.taskId is a string so use double equals
        if (obj.id == req.params.taskId) {
            deleteIndex = index;
        }
    });

    
    // Delete the task item
    if (deleteIndex !== undefined) {
      data.tasks.splice(deleteIndex, 1);
    }
  
    res.send(data);
});


router.put('/:taskId', (req, res) => {
    console.log(req.body);

    // Find the index of the task to edit
    let editIndex;
    data.tasks.forEach((obj, index) => {
        if (obj.id == req.params.taskId) {
            editIndex = index;
        }
    })
    
    if (editIndex !== undefined) {
        let element = data.tasks[editIndex];
        let priority = req.body.priority.charAt(0).toUpperCase() + req.body.priority.slice(1);
    
        element.name = req.body.name;
        element.dscrp = req.body.dscrp;
        element.assign = req.body.assign;
        element.priority = priority;
        element.calendar = req.body.calendar;
        
        // Account for when req.body.completed is true after clicking checkmark
        element.completed = req.body.completed || false;
    }
    
    console.log(data);
    res.end();
});

module.exports = router;