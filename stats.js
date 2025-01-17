document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.stats-section');
    
    sections.forEach(section => {
        section.addEventListener('click', () => {
            // Don't do anything if clicking the already active section
            if (section.classList.contains('active')) return;
            
            // Remove active class from all sections with animation
            sections.forEach(s => {
                if (s.classList.contains('active')) {
                    const content = s.querySelector('.stats-content');
                    content.style.opacity = '0.5';
                    setTimeout(() => {
                        s.classList.remove('active');
                        content.style.display = 'none';
                    }, 0);
                }
            });
            
            // Add active class to clicked section with animation
            const content = section.querySelector('.stats-content');
            section.classList.add('active');
            content.style.display = 'block';
            setTimeout(() => {
                content.style.opacity = '1';
            }, 10);
        });
    });
});

function getUserStats() {
    // Call to the Discord API to get Users stats with the SteamID
}
