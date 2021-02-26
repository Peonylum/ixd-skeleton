let deleteDialog = document.querySelector('dialog');

document.querySelector('#delete').addEventListener('click', () => deleteDialog.showModal());

let no = deleteDialog.querySelectorAll('button')[0];
let yes = deleteDialog.querySelectorAll('button')[1];

no.addEventListener('click', () => deleteDialog.close());
yes.addEventListener('click', () => {

    //document.querySelector('h1')
    data = {"testing": "hello"};

    fetch('/', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
});