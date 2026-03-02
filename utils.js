// ============================================
// DévPerso - Utility Functions
// ============================================

// Toast Notification System
const Toast = {
    container: null,
    
    init() {
        // Create toast container if not exists
        if (!this.container) {
            this.container = document.createElement('div');
            this.container.id = 'toast-container';
            this.container.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 9999;
                display: flex;
                flex-direction: column;
                gap: 10px;
                max-width: 350px;
            `;
            document.body.appendChild(this.container);
        }
    },
    
    show(message, type = 'info', duration = 4000) {
        this.init();
        
        const toast = document.createElement('div');
        toast.className = `toast-item toast-${type}`;
        toast.setAttribute('role', 'alert');
        toast.setAttribute('aria-live', 'polite');
        
        // Icon based on type
        const icons = {
            success: 'fas fa-check-circle',
            error: 'fas fa-exclamation-circle',
            warning: 'fas fa-exclamation-triangle',
            info: 'fas fa-info-circle'
        };
        
        toast.style.cssText = `
            padding: 15px 20px;
            border-radius: 10px;
            background: ${this.getBackground(type)};
            color: white;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
            display: flex;
            align-items: center;
            gap: 12px;
            animation: slideIn 0.3s ease;
            font-family: 'Poppins', sans-serif;
        `;
        
        toast.innerHTML = `
            <i class="${icons[type]}" style="font-size: 1.2rem;"></i>
            <span style="flex: 1;">${message}</span>
            <button onclick="this.parentElement.remove()" style="
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                font-size: 1.2rem;
                opacity: 0.7;
            " aria-label="Fermer">&times;</button>
        `;
        
        this.container.appendChild(toast);
        
        // Auto remove
        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, duration);
        
        return toast;
    },
    
    getBackground(type) {
        const colors = {
            success: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
            error: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
            warning: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
            info: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)'
        };
        return colors[type] || colors.info;
    },
    
    success(message) { return this.show(message, 'success'); },
    error(message) { return this.show(message, 'error'); },
    warning(message) { return this.show(message, 'warning'); },
    info(message) { return this.show(message, 'info'); }
};

// Add toast animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Local Storage Manager with encryption simulation
const StorageManager = {
    PREFIX: 'devperso_',
    
    set(key, value) {
        try {
            const data = JSON.stringify(value);
            localStorage.setItem(this.PREFIX + key, data);
            return true;
        } catch (e) {
            console.error('Storage error:', e);
            return false;
        }
    },
    
    get(key, defaultValue = null) {
        try {
            const data = localStorage.getItem(this.PREFIX + key);
            return data ? JSON.parse(data) : defaultValue;
        } catch (e) {
            console.error('Storage error:', e);
            return defaultValue;
        }
    },
    
    remove(key) {
        localStorage.removeItem(this.PREFIX + key);
    },
    
    clear() {
        const keys = Object.keys(localStorage).filter(k => k.startsWith(this.PREFIX));
        keys.forEach(k => localStorage.removeItem(k));
    }
};

// User Progress Tracker
const ProgressTracker = {
    STORAGE_KEY: 'user_progress',
    
    init() {
        if (!this.get()) {
            this.set({
                quotesViewed: 0,
                affirmationsUsed: 0,
                challengesStarted: 0,
                challengesCompleted: 0,
                streak: 0,
                lastActive: null,
                totalDays: 0
            });
        }
    },
    
    get() {
        return StorageManager.get(this.STORAGE_KEY);
    },
    
    set(data) {
        StorageManager.set(this.STORAGE_KEY, data);
    },
    
    update(key, increment = 1) {
        const data = this.get();
        if (data && data[key] !== undefined) {
            data[key] += increment;
            data.lastActive = new Date().toISOString();
            
            // Update streak
            const today = new Date().toDateString();
            if (data.lastActive !== today) {
                const lastActive = new Date(data.lastActive).toDateString();
                const yesterday = new Date(Date.now() - 86400000).toDateString();
                
                if (lastActive === yesterday) {
                    data.streak += 1;
                } else if (lastActive !== today) {
                    data.streak = 1;
                }
                data.totalDays += 1;
            }
            
            this.set(data);
        }
    },
    
    getStats() {
        return this.get() || {};
    }
};

// Smooth Scroll Helper
function smoothScrollTo(elementId, offset = 80) {
    const element = document.getElementById(elementId);
    if (element) {
        const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
            top: top,
            behavior: 'smooth'
        });
    }
}

// Lazy Loading Images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    }, { rootMargin: '50px' });
    
    images.forEach(img => observer.observe(img));
}

// Copy to Clipboard with feedback
async function copyToClipboard(text, showToast = true) {
    try {
        await navigator.clipboard.writeText(text);
        if (showToast) {
            Toast.success('Copié dans le presse-papiers !');
        }
        return true;
    } catch (err) {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        
        if (showToast) {
            Toast.success('Copié dans le presse-papiers !');
        }
        return true;
    }
}

// Share functionality
async function shareContent(title, text, url = window.location.href) {
    if (navigator.share) {
        try {
            await navigator.share({ title, text, url });
            Toast.success('Partagé avec succès !');
        } catch (err) {
            if (err.name !== 'AbortError') {
                copyToClipboard(text + ' ' + url);
            }
        }
    } else {
        copyToClipboard(text + ' ' + url);
    }
}

// Form validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password, minLength = 6) {
    return password && password.length >= minLength;
}

function showFormError(input, message) {
    input.classList.add('is-invalid');
    let errorDiv = input.nextElementSibling;
    if (!errorDiv || !errorDiv.classList.contains('invalid-feedback')) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'invalid-feedback';
        input.parentNode.insertBefore(errorDiv, input.nextSibling);
    }
    errorDiv.textContent = message;
}

function clearFormError(input) {
    input.classList.remove('is-invalid');
    const errorDiv = input.nextElementSibling;
    if (errorDiv && errorDiv.classList.contains('invalid-feedback')) {
        errorDiv.textContent = '';
    }
}

// Loading spinner
function showLoading(elementId) {
    const el = document.getElementById(elementId);
    if (el) {
        el.dataset.originalContent = el.innerHTML;
        el.innerHTML = '<span class="loading"></span> Chargement...';
        el.disabled = true;
    }
}

function hideLoading(elementId) {
    const el = document.getElementById(elementId);
    if (el && el.dataset.originalContent) {
        el.innerHTML = el.dataset.originalContent;
        el.disabled = false;
        delete el.dataset.originalContent;
    }
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Initialize common features
document.addEventListener('DOMContentLoaded', function() {
    // Initialize progress tracker
    ProgressTracker.init();
    
    // Lazy load images
    lazyLoadImages();
    
    // Add keyboard navigation support
    document.querySelectorAll('.btn, .nav-link').forEach(el => {
        el.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                if (this.tagName === 'A' || this.getAttribute('onclick')) {
                    e.preventDefault();
                    this.click();
                }
            }
        });
    });
});

// Export for global use
window.Toast = Toast;
window.StorageManager = StorageManager;
window.ProgressTracker = ProgressTracker;
window.smoothScrollTo = smoothScrollTo;
window.copyToClipboard = copyToClipboard;
window.shareContent = shareContent;
window.validateEmail = validateEmail;
window.validatePassword = validatePassword;
window.showFormError = showFormError;
window.clearFormError = clearFormError;
window.showLoading = showLoading;
window.hideLoading = hideLoading;
window.debounce = debounce;
window.throttle = throttle;
