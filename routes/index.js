
/*
 * GET home page.
 */

 var data = require('../tasks.json')

exports.view = function(req, res) {
  res.render('tasks', data);
};

exports.addTask = function(req, res) {

  let creator;
  if (req.body.creator === undefined) {
    creator = "@You";
  } else {
    creator = req.body.creator;
  }

  // Used this to figure out uppercase first letter:
  // https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
  let priority = req.body.priority.charAt(0).toUpperCase() + req.body.priority.slice(1);

  data.tasks.push({
    "name": req.body.name,
    "dscrp": req.body.dscrp,
    "creator": creator,
    "assign": req.body.assign,
    "priority": priority,
    "calendar": req.body.calendar,
    "completed": false
  });

  res.render('tasks', data);
}

exports.deleteTask = function(req, res) {
  console.log(req.body.name);

  let deleteIndex;
  data.tasks.forEach( (obj, index) => {
      console.log(obj);
      if(obj.name === req.body.name) {
            deleteIndex = index;
      }
  })
  if(deleteIndex !== undefined) {
    data.tasks.splice(deleteIndex, 1);
  }
  
  console.log(data.tasks);
  res.send(data);

}