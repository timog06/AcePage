function redirectToStats() {
    const steamIdInput = document.getElementById('steamId-input');
    if (!steamIdInput) return;
    
    const steamId = steamIdInput.value;
    if (steamId) {
        localStorage.setItem('pendingStatsRequest', steamId);
        window.location.href = 'stats.html';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.button');
    if (button) {
        button.addEventListener('click', redirectToStats);
    }
});
