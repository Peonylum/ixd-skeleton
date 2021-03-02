/*
 * GET edit tasks page.
 */

var data = require('../tasks.json');

exports.view = function (req, res) {
  res.render('edit');
};

exports.editTask = function (req, res) {
  let editIndex;
  data.tasks.forEach((obj, index) => {
    if (obj.id == req.body.id) {
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
    element.completed = false;
  }

  res.redirect('/');
}