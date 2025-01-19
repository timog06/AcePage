document.addEventListener('DOMContentLoaded', async function() {
    try {
        const response = await fetch('users.json');
        const userData = await response.json();
        
        // Function to create staff member elements
        function createStaffMember(member) {
            return `
                <div class="staff-member">
                    <div class="member-avatar" style="background-image: url('${member.avatar}')"></div>
                    <div class="member-info">
                        <span class="member-name">${member.username}</span>
                        <span class="member-role">${member.role}</span>
                    </div>
                </div>
            `;
        }

        // Populate each section
        const sections = ['admins', 'mods', 'developers'];
        sections.forEach(section => {
            const teamSections = document.querySelectorAll('.team-section');
            const targetSection = Array.from(teamSections).find(el => 
                el.querySelector('h3').textContent.toLowerCase() === section
            );
            
            if (targetSection && userData[section]) {
                const container = targetSection.querySelector('.team-members');
                container.innerHTML = userData[section].map(member => createStaffMember(member)).join('');
            }
        });

    } catch (error) {
        console.error('Error loading user data:', error);
    }
});
