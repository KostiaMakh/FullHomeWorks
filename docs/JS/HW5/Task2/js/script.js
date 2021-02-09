function logIn() {
    /*delete extra spaces*/
    let inputLogin = document.getElementById('login').value.trim();
    let newUserFirstName = document.getElementById('firstName').value.trim();
    let newUserLastName = document.getElementById('lastName').value.trim();
    let userPassword = document.getElementById('password').value.trim();
    let userMailBox = document.getElementById('mail').value.trim();



    /*if 'sign up' checked*/
    if (document.getElementById('butSignUp').checked === true) {
        userInfoControl(newUserFirstName, newUserLastName);
        mailControl(userMailBox);
        passwordControl(userPassword);
    }
    /*if 'Log in' checked*/
    else if (document.getElementById('butLogIn').checked === true) {
        loginControl(inputLogin);
        mailControl(userMailBox);
        passwordControl(userPassword);
    }
}
function mailControl(a) {
    /*control @ in mail*/
    if (a.includes('@') === false) {
        alert('Некорректный формат ввода адреса почты. ллектронная почта должна содержать "@"')
        document.getElementById('mail').classList.add('alertButton');
    }
    /*control point in mail*/
    if (a.includes('.') === false) {
        alert('Некорректный формат ввода адреса почты. Эллектронная почта должна содержать доменную зону')
        document.getElementById('mail').classList.add('alertButton');
    }
    /*control spaces in mail*/
    if (a.includes(' ')) {
        alert('Адрес эллектрронной почты не должен содержать пробелов');
        document.getElementById('mail').classList.add('alertButton');
    }
}
function userInfoControl(a, b) {
    if (a.length < 2 && b.length < 4) {
        alert('Слишком короткое имя пользователя');
        document.getElementById('firstName').classList.add('alertButton');
        document.getElementById('lastName').classList.add('alertButton');
    }
}
function passwordControl(a) {
    if (a.length < 7) {
        alert('Введенный пароль менее 7 символов');
        document.getElementById('password').classList.add('alertButton');
    }
    if (a.includes(' ')) {
        alert('Пароль не должне содержать пробелов')
        document.getElementById('password').classList.add('alertButton');
    }
}
function loginControl(a) {
    /*control spaces in user name*/
    if (a.includes(' ')) {
        alert('Login не должен содержать пробелов')
        document.getElementById('login').classList.add('alertButton');
    }
    /*control length of user Name and last name*/
    if (a.length < 4) {
        alert('Введен слишком короткий логин.');
        document.getElementById('login').classList.add('alertButton');
    }
}

function resetAlert() {
    document.getElementById('password').classList.remove('alertButton');
    document.getElementById('firstName').classList.remove('alertButton');
    document.getElementById('lastName').classList.remove('alertButton');
    document.getElementById('mail').classList.remove('alertButton');
    document.getElementById('login').classList.remove('alertButton');
}

function loadModalWindow() {
    document.getElementById('formType').style.display = 'flex';
}

function closeModalWindow() {
    document.getElementById('formType').style.display = 'none';
}
