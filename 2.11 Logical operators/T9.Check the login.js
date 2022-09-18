
let visitor = prompt("Who's there?", '');
if (visitor === 'Admin'){
    let password = prompt("Password?",'');
        if (password === 'TheMaster'){
        alert('Welcome!');
    } else if (password === '' || password === null){
        alert('Canceled');
    } else {
        alert('Wrong Password!');
    }
} else if (visitor === '' || visitor === null) {
    alert('Canceled !');
} else {
    alert ("I don't know you");
}

