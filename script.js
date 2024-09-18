document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('bg-video');

    // Check if video has already played
    if (!sessionStorage.getItem('videoPlayed')) {
        video.addEventListener('ended', () => {
            sessionStorage.setItem('videoPlayed', 'true');
        });
    } else {
        video.style.display = 'none'; // Hide the video if it has played
    }
});
