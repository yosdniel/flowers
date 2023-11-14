document.addEventListener("DOMContentLoaded", async function () {
    const lyrics = [
        "Oh, I know I'm probably much too late",
        "To try and apologize for my mistakes",
        "But I just want you to know",
    ];

    const delay = 45; // adjust the speed here
    const lyricsElement = document.getElementById("lyrics");

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

            lyricsElement.textContent = "";

            await new Promise((resolve) => setTimeout(resolve, delay * 10));
        }
    }

    // Menampilkan lirik
    displayLyrics();

    // Menunggu beberapa detik sebelum menampilkan elemen flowers
    setTimeout(function () {
        var content2 = document.querySelector('.flowers');
        if (lyricsElement && content2) {
            lyricsElement.innerHTML = content2.innerHTML;
        } else {
            console.error('Elemen tidak ditemukan');
        }
    }, 5000); // Ubah durasi menunggu (dalam milidetik) sesuai kebutuhan Anda
});
});
