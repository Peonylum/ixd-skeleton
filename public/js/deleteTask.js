let deleteDialog = document.querySelector('#delete-dialog');

document.querySelector('#delete').addEventListener('click', () => deleteDialog.style.display = "block");

let no = deleteDialog.querySelectorAll('button')[0];
let yes = deleteDialog.querySelectorAll('button')[1];

no.addEventListener('click', () => deleteDialog.style.display = "none");
yes.addEventListener('click', () => {

    let taskId = localStorage.getItem('taskId');

    fetch(`tasks/${taskId}`, {
        method: 'DELETE'
    })
    .then(res => window.location.href = "/home");

});