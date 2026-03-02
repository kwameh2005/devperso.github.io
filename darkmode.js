// ============================================
// DARK MODE / NIGHT MODE - DévPerso
// ============================================

const DarkMode = {
    // Initialize dark mode
    init: function() {
        // Check for saved preference or system preference
        const savedMode = localStorage.getItem('devperso_darkmode');
        
        if (savedMode === 'true') {
            this.enable();
        } else if (savedMode === null && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.enable();
        }
        
        // Create toggle button
        this.createToggle();
    },
    
    // Enable dark mode
    enable: function() {
        document.body.classList.add('dark-mode');
        localStorage.setItem('devperso_darkmode', 'true');
        this.updateIcon();
    },
    
    // Disable dark mode
    disable: function() {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('devperso_darkmode', 'false');
        this.updateIcon();
    },
    
    // Toggle dark mode
    toggle: function() {
        if (document.body.classList.contains('dark-mode')) {
            this.disable();
        } else {
            this.enable();
        }
    },
    
    // Check if dark mode is enabled
    isEnabled: function() {
        return document.body.classList.contains('dark-mode');
    },
    
    // Update toggle icon
    updateIcon: function() {
        const toggleBtn = document.getElementById('darkModeToggle');
        if (toggleBtn) {
            if (this.isEnabled()) {
                toggleBtn.innerHTML = '☀️';
                toggleBtn.title = 'Mode clair';
            } else {
                toggleBtn.innerHTML = '🌙';
                toggleBtn.title = 'Mode sombre';
            }
        }
    },
    
    // Create toggle button
    createToggle: function() {
        // Check if button already exists
        if (document.getElementById('darkModeToggle')) return;
        
        // Create button container
        const container = document.createElement('div');
        container.className = 'dark-mode-toggle';
        container.id = 'darkModeContainer';
        container.style.cssText = 'position: fixed; bottom: 20px; right: 20px; z-index: 1000;';
        
        // Create button
        const btn = document.createElement('button');
        btn.id = 'darkModeToggle';
        btn.className = 'btn btn-lg rounded-circle shadow';
        btn.style.cssText = 'width: 50px; height: 50px; cursor: pointer; background: var(--primary); color: white; border: none;';
        btn.onclick = () => this.toggle();
        btn.innerHTML = this.isEnabled() ? '☀️' : '🌙';
        btn.title = this.isEnabled() ? 'Mode clair' : 'Mode sombre';
        
        container.appendChild(btn);
        document.body.appendChild(container);
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    DarkMode.init();
});

// Export for use in other scripts
window.DarkMode = DarkMode;
