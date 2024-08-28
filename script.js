document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Formun varsayılan submit davranışını engelle

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Kullanıcı adı ve şifreyi kontrol et
        if (username === 'deneme@gmail.com' && password === '123') {
            // Başarılı girişte yönlendir
            window.location.href = 'rota.html';
        } else {
            alert('Kullanıcı adı veya şifre yanlış.');
        }
    });

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Formun varsayılan submit davranışını engelle
        
        // Kayıt işlemleri buraya eklenebilir
        alert('Kayıt işlemi şu anda desteklenmiyor.');
    });
});


