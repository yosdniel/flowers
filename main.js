document.addEventListener("DOMContentLoaded", async function () {
    const lyrics = [
        "Oh, I know I'm probably much too late",
        "To try and apologize for my mistakes",
        "But I just want you to know",
    ];

    const delay = 45; // Sesuaikan kecepatan di sini
    const lyricsElement = document.getElementById('lyrics');

    async function displayLyrics() {
        for (const line of lyrics) {
            for (const char of line) {
                const charElement = document.createElement("span");
                charElement.textContent = char;
                charElement.style.animation = "glow 2s ease-in-out";
                lyricsElement.appendChild(charElement);

                await new Promise((resolve) => setTimeout(resolve, delay));
                charElement.style.animation = "";
            }

            // Tambahkan garis baru setelah satu baris lirik ditampilkan
            lyricsElement.appendChild(document.createElement("br"));

            await new Promise((resolve) => setTimeout(resolve, delay * 10));
        }
    }

    // Menampilkan lirik
    await displayLyrics();

    // Fungsi untuk menampilkan elemen bunga setelah lirik
    function showFlowers() {
        var content1 = document.getElementById('lyrics');
        var content2 = document.getElementById('bunga');
        if (content1 && content2) {
            content1.innerHTML += content2.innerHTML; // Menggunakan += untuk menambahkan elemen bunga tanpa menghapus lirik
        } else {
            console.error('Elemen tidak ditemukan');
        }
    }

    // Panggil fungsi setelah selesai menampilkan lirik
    setTimeout(showFlowers, 2000); // Menunggu 2000 milidetik (2 detik) sebelum menampilkan elemen bunga
});
