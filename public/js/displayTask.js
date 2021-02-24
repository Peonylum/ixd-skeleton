var taskNames = document.querySelectorAll(".task .task-name");
var taskPriorities = document.querySelectorAll(".task .priority");
// There should be one for the description of the task, but it's not displayed right now
var creators = document.querySelectorAll(".task .creator");
var assignees = document.querySelectorAll(".task .assignee");
// There should be one for the due date of the task, but it's not displayed right now

document.querySelectorAll('.task').forEach((o,i) => {
    o.addEventListener('click', e => {
        localStorage.setItem("taskName",taskNames[i].innerHTML);
        localStorage.setItem("taskPriority",taskPriorities[i].innerHTML);
        localStorage.setItem("taskCreator",creators[i].innerHTML);
        localStorage.setItem("taskAssignee",assignees[i].innerHTML);

        window.location.href = "taskDescription";
    })
})
