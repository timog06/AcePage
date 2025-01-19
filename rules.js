document.addEventListener('DOMContentLoaded', async function() {
    const rulesColumn = document.getElementById('rules-column');
    if (!rulesColumn) return;

    // Fetch rules.html content
    const response = await fetch('rules.html');
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Get rules content from rules.html
    const discordContent = doc.querySelector('#discord-rules-full ul').innerHTML;
    const squadContent = doc.querySelector('#squad-rules-full ul').innerHTML;

    // Create rules containers
    const discordRules = rulesColumn.querySelector('.discord-rules ul');
    const squadRules = rulesColumn.querySelector('.squad-rules ul');
    
    // Function to limit and format rules for index.html
    const formatRules = (content) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = content;
        const rules = tempDiv.querySelectorAll('li');
        const formattedRules = Array.from(rules).slice(0, 5); // Show only first 5 rules
        return formattedRules.map(rule => {
            // Simplify the rule text by removing the number prefix
            const text = rule.textContent.replace(/^\d+\.\s*/, '');
            return `<li>${text}</li>`;
        }).join('');
    };
    
    // Set the content from rules.html with limited rules for index.html
    discordRules.innerHTML = formatRules(discordContent);
    squadRules.innerHTML = formatRules(squadContent);

    let showingDiscord = true;
    
    // Initial state
    squadRules.parentElement.style.opacity = '0';
    squadRules.parentElement.style.display = 'none';
    discordRules.parentElement.style.opacity = '1';
    
    // Add transition styles
    discordRules.parentElement.style.transition = 'opacity 0.5s ease-in-out';
    squadRules.parentElement.style.transition = 'opacity 0.5s ease-in-out';
    
    setInterval(() => {
        if (showingDiscord) {
            // Fade out Discord rules
            discordRules.parentElement.style.opacity = '0';
            setTimeout(() => {
                discordRules.parentElement.style.display = 'none';
                squadRules.parentElement.style.display = 'block';
                setTimeout(() => {
                    squadRules.parentElement.style.opacity = '1';
                }, 50);
            }, 500);
        } else {
            // Fade out Squad rules
            squadRules.parentElement.style.opacity = '0';
            setTimeout(() => {
                squadRules.parentElement.style.display = 'none';
                discordRules.parentElement.style.display = 'block';
                setTimeout(() => {
                    discordRules.parentElement.style.opacity = '1';
                }, 50);
            }, 500);
        }
        showingDiscord = !showingDiscord;
    }, 30000); // 30 seconds
});
