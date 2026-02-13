document.addEventListener('DOMContentLoaded', () => {
    const heartContainer = document.getElementById('heart-container');
    const messageContainer = document.getElementById('message-container');
    const musicBtn = document.getElementById('music-btn');
    const bgMusic = document.getElementById('bg-music');

    // Heart Click Interaction
    heartContainer.addEventListener('click', () => {
        // Animate heart out
        heartContainer.style.opacity = '0';
        heartContainer.style.transform = 'scale(0)';

        // Wait for animation to finish then hide and show message
        setTimeout(() => {
            heartContainer.classList.add('hidden');
            messageContainer.classList.remove('hidden');
        }, 500);
    });

    // Music Button Interaction
    let isPlaying = false;

    musicBtn.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
            musicBtn.textContent = 'Play our song 🎶';
            isPlaying = false;
        } else {
            bgMusic.play().then(() => {
                musicBtn.textContent = 'Now playing... 🎶';
                isPlaying = true;
            }).catch(error => {
                console.log("Audio play failed:", error);
                alert("Audio play failed. Please checking your internet connection or if the file link is valid.");
            });
        }
    });
});
