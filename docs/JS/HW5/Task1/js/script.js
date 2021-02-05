function logIn() {
    let inputLogin = document.getElementById('login').value.trim();
    if (inputLogin.includes(' ')) {
        alert('не должно біть пробелов в названии')
        document.getElementById('login').classList.add('alertButton');
    }


    if (inputLogin.length<7) {
        alert('Введенній пароль менее 7 символов')
    }
}