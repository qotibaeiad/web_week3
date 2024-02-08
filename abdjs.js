function checkLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === 'abdallh' && password === '123456') {
       
        window.location.href = 'https://www.ynet.co.il/home/0,7340,L-8,00.html';
    } else {
        alert('Incorrect username or password');
    }
}