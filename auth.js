// ============================================
// AUTHENTIFICATION - DévPerso
// ============================================

const AUTH_KEY = 'devperso_users';
const CURRENT_USER_KEY = 'devperso_current_user';

// Fonction pour obtenir tous les utilisateurs
function getUsers() {
    return JSON.parse(localStorage.getItem(AUTH_KEY) || '[]');
}

// Fonction pour sauvegarder les utilisateurs
function saveUsers(users) {
    localStorage.setItem(AUTH_KEY, JSON.stringify(users));
}

// Fonction pour inscription
function register(name, email, password) {
    const users = getUsers();
    
    // Vérifier si l'email existe déjà
    if (users.find(u => u.email === email)) {
        return { success: false, message: 'Cet email est déjà utilisé.' };
    }
    
    // Créer le nouvel utilisateur
    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        password: password, // Note: en production, utiliser un hash!
        favorites: [],
        quotes: [],
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    saveUsers(users);
    
    // Connecter automatiquement l'utilisateur
    login(email, password);
    
    return { success: true, message: 'Compte créé avec succès !' };
}

// Fonction pour connexion
function login(email, password) {
    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
        return { success: false, message: 'Email ou mot de passe incorrect.' };
    }
    
    // Sauvegarder l'utilisateur connecté
    const userData = {
        id: user.id,
        name: user.name,
        email: user.email
    };
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userData));
    
    return { success: true, message: 'Connexion réussie !', user: userData };
}

// Fonction pour déconnexion
function logout() {
    localStorage.removeItem(CURRENT_USER_KEY);
    window.location.href = 'index.html';
}

// Fonction pour obtenir l'utilisateur actuel
function getCurrentUser() {
    return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
}

// Vérifier si l'utilisateur est connecté
function isLoggedIn() {
    return getCurrentUser() !== null;
}

// Fonction pour mettre à jour les favoris de l'utilisateur
function updateUserFavorites(favorites) {
    const users = getUsers();
    const currentUser = getCurrentUser();
    
    if (!currentUser) return false;
    
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex === -1) return false;
    
    users[userIndex].favorites = favorites;
    saveUsers(users);
    
    return true;
}

// Fonction pour charger les favoris de l'utilisateur
function loadUserFavorites() {
    const users = getUsers();
    const currentUser = getCurrentUser();
    
    if (!currentUser) return [];
    
    const user = users.find(u => u.id === currentUser.id);
    return user ? user.favorites : [];
}

// Mettre à jour la navigation selon l'état de connexion
function updateNavigation() {
    const user = getCurrentUser();
    const navMenu = document.getElementById('menu');
    
    if (!navMenu) return;
    
    if (user) {
        // Utilisateur connecté - afficher "Mon Compte" et "Déconnexion"
        navMenu.innerHTML = `
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="index.html">Accueil</a></li>
                <li class="nav-item"><a class="nav-link" href="challenges.html">Challenges</a></li>
                <li class="nav-item"><a class="nav-link" href="citation.html">Citations</a></li>
                <li class="nav-item"><a class="nav-link" href="favorites.html">Favoris</a></li>
                <li class="nav-item"><a class="nav-link" href="affirmations.html">Affirmations</a></li>
                <li class="nav-item"><a class="nav-link" href="dashboard.html">Tableau de bord</a></li>
                <li class="nav-item"><a class="nav-link" href="a propos.html">À propos</a></li>
                <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                <li class="nav-item"><a class="nav-link fw-bold" href="dashboard.html">👤 ${user.name}</a></li>
                <li class="nav-item"><a class="nav-link text-danger" href="#" onclick="logout(); return false;">Déconnexion</a></li>
            </ul>
        `;
    } else {
        // Utilisateur non connecté - afficher "Connexion" et "Inscription"
        navMenu.innerHTML = `
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="index.html">Accueil</a></li>
                <li class="nav-item"><a class="nav-link" href="challenges.html">Challenges</a></li>
                <li class="nav-item"><a class="nav-link" href="citation.html">Citations</a></li>
                <li class="nav-item"><a class="nav-link" href="favorites.html">Favoris</a></li>
                <li class="nav-item"><a class="nav-link" href="affirmations.html">Affirmations</a></li>
                <li class="nav-item"><a class="nav-link" href="dashboard.html">Tableau de bord</a></li>
                <li class="nav-item"><a class="nav-link" href="a propos.html">À propos</a></li>
                <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                <li class="nav-item"><a class="nav-link btn btn-primary text-white ms-2" href="connexion.html">Connexion</a></li>
                <li class="nav-item"><a class="nav-link btn btn-outline-primary ms-1" href="inscription.html">Inscription</a></li>
            </ul>
        `;
    }
}

// Protéger une page - rediriger si non connecté
function requireAuth() {
    if (!isLoggedIn()) {
        window.location.href = 'connexion.html';
        return false;
    }
    return true;
}

// Exécuter updateNavigation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    updateNavigation();
});
