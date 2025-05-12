document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menü işlevselliği
    const menuToggle = document.querySelector('.menu-toggle'); // Hamburger menü butonu
    const navList = document.querySelector('.nav-list'); // Navigasyon listesi

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('open'); // 'open' sınıfını ekle/kaldır
        });
    }

    // İletişim formu için basit gönderim işleyici (sadece page10.html'de)
    const contactForm = document.getElementById('contactForm'); // Form elementi
    const formMessage = document.getElementById('formMessage'); // Mesaj gösterme alanı

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Formun varsayılan gönderimini engelle

            // Form alanlarındaki değerleri al
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Basit doğrulama (daha sağlam doğrulama gerekebilir)
            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                formMessage.textContent = 'Lütfen tüm alanları doldurunuz.';
                formMessage.style.backgroundColor = '#f8d7da'; // Hata için kırmızımsı arkaplan
                formMessage.style.color = '#721c24'; // Kırmızımsı yazı
                formMessage.style.borderColor = '#f5c6cb';
                formMessage.style.display = 'block'; // Mesajı göster
            } else {
                formMessage.textContent = `Mesajınız başarıyla gönderildi, ${name}! Teşekkür ederiz.`;
                formMessage.style.backgroundColor = '#d4edda'; // Başarı için yeşilimsi arkaplan
                formMessage.style.color = '#155724'; // Yeşilimsi yazı
                formMessage.style.borderColor = '#c3e6cb';
                formMessage.style.display = 'block'; // Mesajı göster
                contactForm.reset(); // Formu temizle
            }

            // Burada formu bir sunucuya gönderebilirsiniz (örneğin, fetch() kullanarak)
        });
    }
});

// Genel bir fonksiyon örneği (kullanıcının istediği gibi dışarıdan erişilebilir)
// Bu fonksiyon, body etiketine onload="showWelcomeAlert()" eklenerek veya başka bir olayla tetiklenebilir.
function showWelcomeAlert() {
    alert("Otomotiv dünyasına hoş geldiniz! En yeni modellerimizi keşfedin.");
}