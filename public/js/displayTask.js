var taskNames = document.querySelectorAll(".task .task-name");
var taskPriorities = document.querySelectorAll(".task .priority");
var taskDescription = document.querySelectorAll(".task .description");
var creators = document.querySelectorAll(".task .creator");
var assignees = document.querySelectorAll(".task .assignee");
var taskDue = document.querySelectorAll(".task .due-date");
var taskId = document.querySelectorAll(".task .task-id");

document.querySelectorAll('.task .task-info').forEach((o,i) => {
    o.addEventListener('click', e => {
        localStorage.setItem("taskName", taskNames[i].innerHTML);
        localStorage.setItem("taskPriority", taskPriorities[i].innerHTML);
        localStorage.setItem("taskDescription",taskDescription[i].innerHTML);
        localStorage.setItem("taskCreator", creators[i].innerHTML);
        localStorage.setItem("taskAssignee", assignees[i].innerHTML);
        localStorage.setItem("taskDue", taskDue[i].innerHTML);
        localStorage.setItem("taskId", taskId[i].innerHTML);

        window.location.href = "taskDescription";
    });
});

document.querySelector('main').addEventListener('click', e => {

    // Get the SVG with data-completed
    let checkMarkSVG = e.target.closest('[data-completed]');

    // Check if it exists
    if (!checkMarkSVG) {
        console.log('Unrelated event')
        return;
    }

    // Use to grab task information
    let task = checkMarkSVG.parentElement;
    let taskInfo = task.children[1];
    let taskId = taskInfo.lastElementChild.textContent;

    // Can also do this instead: checkMarkSVG.dataset.completed !== 'true' but not as readable
    let taskCompleted = checkMarkSVG.dataset.completed === 'true' ? false : true;

    // Newly updated task object (Only change is the completed property)
    let updatedTask = {
        "name": task.firstElementChild.textContent,
        "dscrp": taskInfo.firstElementChild.textContent,
        "priority": taskInfo.children[1].textContent.slice(0, -9),
        "creator": taskInfo.children[2].textContent.slice(12),
        "assign": taskInfo.children[3].textContent.slice(13),
        "calendar": taskInfo.children[4].textContent.slice(8),
        "id": taskId,
        "completed": taskCompleted
    };

    // Update array on server and reload page to see changes
    fetch(`tasks/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTask)
    })
    .then(res => {
        window.location.href = '/home';
    });
    
});