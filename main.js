document.addEventListener("DOMContentLoaded", async function () {
    const lyrics = [
        "Oh, I know I'm probably much too late",
        "To try and apologize for my mistakes",
        "But I just want you to know",
    ];

    const delay = 45; // Sesuaikan kecepatan di sini
    var lyricsElement = document.getElementById('lyrics');

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

            lyricsElement.appendChild(document.createElement("br"));

            await new Promise((resolve) => setTimeout(resolve, delay * 10));
        }
    }

    // Menampilkan lirik
    await displayLyrics();

    // Menunggu beberapa detik sebelum menampilkan elemen flowers
    setTimeout(function () {
        var content2 = document.getElementById('bunga');
        if (lyricsElement && content2) {
            // Menghapus elemen lirik dari DOM
            lyricsElement.innerHTML = '';
            // Menghapus kelas "hidden" dari elemen flowers
            content2.classList.remove('hidden');
        } else {
            console.error('Elemen tidak ditemukan');
        }
    }, 5000); // Sesuaikan durasi menunggu (dalam milidetik) sesuai kebutuhan Anda
});
