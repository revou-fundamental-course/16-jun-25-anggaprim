document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.tab-panel');
    const indicator = document.getElementById('indicator');
    
    updateIndicator(document.querySelector('.tab-btn.active'));
    function updateIndicator(activeTab) {
        const tabWidth = activeTab.offsetWidth;
        const tabLeft = activeTab.offsetLeft;
        
        indicator.style.width = `${tabWidth}px`;
        indicator.style.left = `${tabLeft}px`;
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Deactivate all tabs and panels
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));
            
            // Activate clicked tab and corresponding panel
            tab.classList.add('active');
            document.getElementById(`tab-${tab.dataset.tab}`).classList.add('active');
            
            // Update indicator position
            updateIndicator(tab);
        });
    });
});