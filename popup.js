// Pop-up öğelerini seçme
const popup = document.getElementById('popup');
const closePopupBtn = document.getElementById('closePopup');

// Pop-up'ı açma işlevi
function openPopupJs() {
    popup.style.display = 'block';
}

// Pop-up'ı kapatma işlevi
closePopupBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Kullanıcı pop-up dışında bir yere tıklarsa pop-up'ı kapat
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});