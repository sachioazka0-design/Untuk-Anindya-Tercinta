// Navigasi antar langkah
const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');
const step3 = document.getElementById('step-3');

// Element interaktif
const kado = document.getElementById('kado');
const slider = document.getElementById('slider-sayang');
const persentaseText = document.getElementById('nilai-persentase');
const pesanRatingText = document.getElementById('pesan-rating');
const btnBuka = document.getElementById('btn-buka');
const btnUlang = document.getElementById('btn-ulang');
const listPesan = document.getElementById('list-pesan');

// Kumpulan 20 kata-kata manis (Nanti akan diacak dan diambil 10)
const semuaKata = [
    "Makasih yaa udah jadi bagian terpenting di hidup aku 💖",
    "Aku suka banget tiap kali lihat kamu senyum 🥰",
    "Jangan pernah berubah ya, tetep jadi diri kamu yang ngangenin 😜",
    "Hari-hariku selalu lebih berwarna kalau ada kamu ✨",
    "Kamu itu rumah buat aku, tempat aku selalu pengen pulang 🏡❤️",
    "Sifat kamu yang kadang nyebelin justru bikin aku makin sayang 😂",
    "Semoga kita bisa terus bareng-bareng lewatin suka duka 🌹",
    "Jaga kesehatan selalu ya sayang, aku gamau kamu sakit 🥺",
    "Aku bersyukur banget bisa kenal dan sama-sama kamu 🎁",
    "I love you! Lebih dari sekadar kata-kata 😘",
    "Kamu selalu bisa bikin aku ngerasa spesial tiap hari 💕",
    "Gak ada yang bisa gantiin posisi kamu di hati aku 🔒",
    "Aku kangen kamu, padahal baru aja ketemu hehehe 🫣",
    "Tetep sabar yaa ngadepin aku yang kadang manja ini 🤭",
    "Kamu itu satu-satunya orang yang paling ngertiin aku 🌟"
];

// 1. Klik Kado -> Pindah ke Slider
kado.addEventListener('click', () => {
    step1.classList.remove('active');
    setTimeout(() => {
        step2.classList.add('active');
        // Reset slider saat masuk step 2
        slider.value = 0;
        updateSlider(0);
    }, 300);
});

// 2. Logika Presisi Slider Sayang
function updateSlider(nilai) {
    persentaseText.textContent = nilai + "%";

    // Logika kondisi sesuai permintaan
    if (nilai >= 0 && nilai <= 40) {
        pesanRatingText.textContent = "yahh ga sayang aku nih? 💔";
        btnBuka.classList.add('hidden');
    } 
    else if (nilai > 40 && nilai <= 70) {
        pesanRatingText.textContent = "koo kayaa ga niat gitu sayangnya sih 😒";
        btnBuka.classList.add('hidden');
    } 
    else if (nilai > 70 && nilai < 100) {
        pesanRatingText.textContent = "ihhh tanggung banget, males ah 😤";
        btnBuka.classList.add('hidden');
    } 
    else if (nilai == 100) {
        pesanRatingText.textContent = "Yey kamuu beneran sayangg banget sama aku 🥰💖";
        btnBuka.classList.remove('hidden');
    }
}

slider.addEventListener('input', (e) => {
    updateSlider(e.target.value);
});

// 3. Buka Kado -> Muncul 10 Kata Random
btnBuka.addEventListener('click', () => {
    step2.classList.remove('active');
    
    // Acak pesan dan ambil 10 teratas
    const pesanAcak = [...semuaKata].sort(() => 0.5 - Math.random()).slice(0, 10);
    
    listPesan.innerHTML = '';
    pesanAcak.forEach((pesan, index) => {
        const div = document.createElement('div');
        div.classList.add('item-pesan');
        div.innerHTML = `<strong>${index + 1}.</strong> ${pesan}`;
        listPesan.appendChild(div);
    });

    setTimeout(() => {
        step3.classList.add('active');
    }, 300);
});

// 4. Tombol Ulangi
btnUlang.addEventListener('click', () => {
    step3.classList.remove('active');
    setTimeout(() => {
        step1.classList.add('active');
    }, 300);
});

// 5. Animasi Hati Beterbangan di Latar Belakang
function buatHati() {
    const bg = document.getElementById('hearts-bg');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Bentuk emoji random
    const emojis = ['❤️', '💖', '💕', '💗'];
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    
    // Posisi dan ukuran acak
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heart.style.fontSize = (Math.random() * 1 + 1) + 'rem';
    
    bg.appendChild(heart);
    
    // Hapus hati setelah selesai animasi (6 detik maksimal)
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Buat hati setiap 400ms
setInterval(buatHati, 400);
                                     
