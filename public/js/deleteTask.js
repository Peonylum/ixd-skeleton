let deleteDialog = document.querySelector('#delete-dialog');

document.querySelector('#delete').addEventListener('click', () => deleteDialog.style.display = "block");

let no = deleteDialog.querySelectorAll('button')[0];
let yes = deleteDialog.querySelectorAll('button')[1];

no.addEventListener('click', () => deleteDialog.style.display = "none");
yes.addEventListener('click', () => {

    let taskName = document.querySelector('h1').innerHTML;
    console.log("taskName: " + taskName);
    let data = {"name": taskName};

    fetch('/', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => window.location.href = "/");

});