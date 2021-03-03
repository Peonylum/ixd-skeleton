var taskNames = document.querySelectorAll(".task .task-name");
var taskPriorities = document.querySelectorAll(".task .priority");
var taskDescription = document.querySelectorAll(".task .description");
var creators = document.querySelectorAll(".task .creator");
var assignees = document.querySelectorAll(".task .assignee");
var taskDue = document.querySelectorAll(".task .due-date");
var taskId = document.querySelectorAll(".task .task-id");

document.querySelectorAll('.task').forEach((o,i) => {
    o.addEventListener('click', e => {
        localStorage.setItem("taskName",taskNames[i].innerHTML);
        localStorage.setItem("taskPriority",taskPriorities[i].innerHTML);
        localStorage.setItem("taskDescription",taskDescription[i].innerHTML);
        localStorage.setItem("taskCreator",creators[i].innerHTML);
        localStorage.setItem("taskAssignee",assignees[i].innerHTML);
        localStorage.setItem("taskDue",taskDue[i].innerHTML);
        localStorage.setItem("taskId", taskId[i].innerHTML);

        window.location.href = "taskDescription";
    })
})
