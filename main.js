onload = () =>{
        document.body.classList.remove("container");
};

document.addEventListener("DOMContentLoaded", function () {
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

setTimeout(function () {
    var content1 = document.querySelector('.lirik');
    var content2 = document.querySelector('.flowers');

    if (content1 && content2) {
        // Mengganti isi elemen dengan konten dari kelas kedua
        content1.innerHTML = content2.innerHTML;
    } else {
        console.error('Elemen tidak ditemukan');
    }
}, 400);
});
