let deleteDialog = document.querySelector('dialog');

document.querySelector('#delete').addEventListener('click', () => deleteDialog.showModal());

let no = deleteDialog.querySelectorAll('button')[0];
let yes = deleteDialog.querySelectorAll('button')[1];

no.addEventListener('click', () => deleteDialog.close());
yes.addEventListener('click', () => {

    let taskName = document.querySelector('h1').innerHTML;
    console.log("taskName: " + taskName);
    data = {"name": taskName};
    
    /*var data = require('../tasks.json');

    let deleteIndex;
    data.tasks.forEach( (obj, index) => {
        console.log(obj);
        if(obj.name === taskName) {
            deleteIndex = index;
        }
    })
    data.tasks.splice(deleteIndex, 1);
    console.log(data.tasks);
    window.location.href = "/";
    */

    fetch('/', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => window.location.href = "/");

    deleteDialog.close();
});