// Ders Verilerini Tanımlama
const dersVerileri = [
    // Pazartesi
    { gun: 'pazartesi', saat: 1, dersAdi: 'Türk Dili ve Edebiyatı', odev: 'Evet', not: 'Hocanın attığı şiirlerin çıktısı' },
    { gun: 'pazartesi', saat: 2, dersAdi: 'Almanca', odev: 'Hayır', not: '' },
    { gun: 'pazartesi', saat: 3, dersAdi: 'Fizik', odev: 'Hayır', not: '' },
    { gun: 'pazartesi', saat: 4, dersAdi: 'Fizik', odev: 'Hayır', not: '' },
    { gun: 'pazartesi', saat: 5, dersAdi: 'İngilizce', odev: 'Hayır', not: '' },
    { gun: 'pazartesi', saat: 6, dersAdi: 'İngilizce', odev: 'Hayır', not: '' },
    { gun: 'pazartesi', saat: 7, dersAdi: 'Tarih', odev: 'Evet', not: 'Kitap etkinliği' },
    { gun: 'pazartesi', saat: 8, dersAdi: 'Adabımuaşeret', odev: 'Hayır', not: '' },
    
    // Salı
    { gun: 'salı', saat: 1, dersAdi: 'Matematik', odev: 'Evet', not: 'Hocanın attığı testler'  },
    { gun: 'salı', saat: 2, dersAdi: 'Matematik', odev: 'Evet', not: 'Hocanın attığı testler'  },
    { gun: 'salı', saat: 3, dersAdi: 'Rehberlik', odev: 'Hayır', not: '' },
    { gun: 'salı', saat: 4, dersAdi: 'Sağlık', odev: 'Hayır', not: '' },
    { gun: 'salı', saat: 5, dersAdi: 'Müzik', odev: 'Evet', not: 'İstiklal Marşı Okuma' },
    { gun: 'salı', saat: 6, dersAdi: 'Coğrafya', odev: 'Hayır', not: ''  },
    { gun: 'salı', saat: 7, dersAdi: 'Temel Dini Bilgiler', odev: 'Hayır', not: '' },
    { gun: 'salı', saat: 8, dersAdi: 'Türk Dili ve Edebiyatı', odev: 'Hayır', not: '' },
    
    // Çarşamba
    { gun: 'çarşamba', saat: 1, dersAdi: 'Din Kültürü ve Ahlak Bilgisi', odev: 'Evet', not: 'Kitap etkinliği' },
    { gun: 'çarşamba', saat: 2, dersAdi: 'Almanca', odev: 'Hayır', not: '' },
    { gun: 'çarşamba', saat: 3, dersAdi: 'İngilizce', odev: 'Hayır', not: '' },
    { gun: 'çarşamba', saat: 4, dersAdi: 'Coğrafya', odev: 'Hayır', not: '' },
    { gun: 'çarşamba', saat: 5, dersAdi: 'Matematik', odev: 'Hayır', not: '' },
    { gun: 'çarşamba', saat: 6, dersAdi: 'Matematik', odev: 'Hayır', not: '' },
    { gun: 'çarşamba', saat: 7, dersAdi: 'İngilizce', odev: 'Hayır', not: '' },
    { gun: 'çarşamba', saat: 8, dersAdi: 'İngilizce', odev: 'Hayır', not: '' },
    
    // Perşembe
    { gun: 'perşembe', saat: 1, dersAdi: 'İngilizce', odev: 'Hayır', not: '' },
    { gun: 'perşembe', saat: 2, dersAdi: 'Türk Dili ve Edebiyatı', odev: 'Hayır', not: '' },
    { gun: 'perşembe', saat: 3, dersAdi: 'Türk Dili ve Edebiyatı', odev: 'Hayır', not: '' },
    { gun: 'perşembe', saat: 4, dersAdi: 'Türk Dili ve Edebiyatı', odev: 'Hayır', not: '' },
    { gun: 'perşembe', saat: 5, dersAdi: 'Matematik', odev: 'Hayır', not: '' },
    { gun: 'perşembe', saat: 6, dersAdi: 'Matematik', odev: 'Hayır', not: '' },
    { gun: 'perşembe', saat: 8, dersAdi: 'Biyoloji', odev: 'Evet', not: 'Hatırlamıyom yazın gruba' },
    { gun: 'perşembe', saat: 7, dersAdi: 'Biyoloji', odev: 'Evet', not: 'Hatırlamıyom yazın gruba' },
    
    // Cuma
    { gun: 'cuma', saat: 1, dersAdi: 'Tarih', odev: 'Hayır', not: '' },
    { gun: 'cuma', saat: 2, dersAdi: 'Din Kültürü ve Ahlak Bilgisi', odev: 'Hayır', not: '' },
    { gun: 'cuma', saat: 3, dersAdi: 'Müzik', odev: 'Hayır', not: '' },
    { gun: 'cuma', saat: 4, dersAdi: 'Türk Dili ve Edebiyatı', odev: 'Hayır', not: '' },
    { gun: 'cuma', saat: 5, dersAdi: 'Kimya', odev: 'Evet', not: 'Kitapta altı çizili yerler yazılacak.' },
    { gun: 'cuma', saat: 6, dersAdi: 'Kimya', odev: 'Evet', not: 'Kitapta altı çizili yerler yazılacak.' },
    { gun: 'cuma', saat: 7, dersAdi: 'Beden Eğitimi', odev: 'Hayır', not: '' },
    { gun: 'cuma', saat: 8, dersAdi: 'Beden Eğitimi', odev: 'Hayır', not: '' },
];

// Ders Programını Oluşturma Fonksiyonu
function olusturDersProgrami() {
    dersVerileri.forEach(ders => {
        const selector = `td[data-gun="${ders.gun}"][data-saat="${ders.saat}"]`;
        const cell = document.querySelector(selector);
        if (cell) {
            cell.innerHTML = `
                <div class="ders-adi">${ders.dersAdi}</div>
                <div class="odev-not">
                    ${ders.odev === 'Evet' ? '<span class="odev-var">&#9989;</span>' : '<span class="odev-yok">&#10060;</span>'}
                    ${ders.not ? `<span class="not">${ders.not}</span>` : ''}
                </div>
            `;
        }
    });
}

// Sayfa Yüklendiğinde Ders Programını Oluştur
document.addEventListener('DOMContentLoaded', olusturDersProgrami);
