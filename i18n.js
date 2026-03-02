// ============================================
// INTERNATIONALIZATION (i18n) - DévPerso
// ============================================

const translations = {
    // French (default)
    fr: {
        nav: {
            home: "Accueil", challenges: "Challenges", citations: "Citations",
            favorites: "Favoris", affirmations: "Affirmations", dashboard: "Tableau de bord",
            about: "À propos", contact: "Contact", login: "Connexion",
            register: "Inscription", logout: "Déconnexion", myAccount: "Mon compte"
        },
        home: {
            title: "Éveille ton potentiel", subtitle: "Des outils, des exercices et des challenges pour transformer ta vie.",
            cta: "Commencer maintenant", whyTitle: "Pourquoi ce site ?",
            whyDesc: "Ce site a été créé pour aider chacun à progresser, se motiver et atteindre ses objectifs.",
            quoteOfDay: "Citation du jour", carouselTitle: "Citations en boucle"
        },
        auth: {
            createAccount: "Créer un compte", createAccountSub: "Rejoignez la communauté DévPerso",
            loginTitle: "Connexion", loginSub: "Accédez à votre compte DévPerso",
            name: "Nom complet", email: "Email", password: "Mot de passe",
            confirmPassword: "Confirmer le mot de passe", minPassword: "Minimum 6 caractères",
            registerBtn: "Créer mon compte", loginBtn: "Se connecter",
            alreadyMember: "Déjà inscrit ?", noAccount: "Pas encore de compte ?",
            loginLink: "Se connecter", registerLink: "S'inscrire", backHome: "← Retour à l'accueil"
        },
        dashboard: {
            title: "Tableau de bord", savedQuotes: "Citations enregistrées", favorites: "Favoris",
            dailyQuote: "Citation du jour", lastQuotes: "Dernières citations enregistrées",
            welcome: "Bienvenue", noQuotes: "Aucune citation pour le moment"
        },
        favorites: {
            title: "Mes citations favorites", subtitle: "Cliquez sur le bouton rouge pour retirer une citation de vos favoris.",
            noFavorites: "Aucun favori pour le moment.", clearAll: "Supprimer tous les favoris",
            confirmClear: "Voulez-vous vraiment supprimer tous les favoris ?",
            removed: "Citation retirée des favoris !", cleared: "Tous les favoris ont été supprimés !"
        },
        citations: {
            title: "Citations Inspirantes", subtitle: "Motivation, confiance, discipline, gratitude… trouve l'inspiration dont tu as besoin.",
            newQuote: "Nouvelle citation", copy: "Copier", addFavorite: "Ajouter aux favoris",
            removeFavorite: "Retirer des favoris", createImage: "Créer une image", shareWA: "Partager WhatsApp",
            categories: "Citations par catégorie", motivation: "Motivation", confidence: "Confiance",
            discipline: "Discipline", gratitude: "Gratitude", success: "Succès", perseverance: "Persévérance",
            thinkers: "Citations de grands penseurs", all: "Tout"
        },
        challenges: {
            title: "Challenges", subtitle: "Relevez des défis quotidiens pour vous transformer.",
            free: "Gratuit", pro: "Pro", start: "Commencer", days: "jours", participants: "participants", completed: "terminé"
        },
        affirmations: {
            title: "Affirmations Positives", subtitle: "Répétez ces affirmations chaque jour pour transformer votre mindset.",
            generate: "Nouvelle affirmation", copy: "Copier", favorite: "Favori"
        },
        contact: {
            title: "Contactez-nous", subtitle: "Une question ? N'hésitez pas à nous contacter.",
            name: "Votre nom", email: "Votre email", message: "Votre message", send: "Envoyer",
            sent: "Message envoyé avec succès !", error: "Erreur lors de l'envoi"
        },
        about: {
            title: "À propos de DévPerso", mission: "Notre mission",
            missionText: "Aider chacun à atteindre son plein potentiel à travers des outils de développement personnel.",
            team: "Notre équipe", teamText: "Une équipe passionnée par le développement personnel et le bien-être.",
            values: "Nos valeurs", val1: "Bienveillance", val2: "Excellence", val3: "Innovation"
        },
        footer: {
            rights: "Tous droits réservés", privacy: "Politique de confidentialité",
            terms: "Conditions d'utilisation", cookies: "Politique de cookies"
        },
        common: {
            loading: "Chargement...", error: "Une erreur est survenue", save: "Enregistrer",
            cancel: "Annuler", confirm: "Confirmer", delete: "Supprimer", edit: "Modifier", yes: "Oui", no: "Non"
        },
        meta: {
            description: "Développement personnel - Citations inspirantes, affirmations positives, challenges quotidiens pour transformer votre vie.",
            keywords: "développement personnel, motivation, citation inspirante, affirmation positive, challenge, bien-être, confiance en soi"
        }
    },
    
    // English
    en: {
        nav: { home: "Home", challenges: "Challenges", citations: "Quotes", favorites: "Favorites",
            affirmations: "Affirmations", dashboard: "Dashboard", about: "About", contact: "Contact",
            login: "Login", register: "Register", logout: "Logout", myAccount: "My account" },
        home: { title: "Awaken Your Potential", subtitle: "Tools, exercises, and challenges to transform your life.",
            cta: "Get Started", whyTitle: "Why This Site?", whyDesc: "This site was created to help everyone progress, get motivated, and achieve their goals.",
            quoteOfDay: "Quote of the Day", carouselTitle: "Quotes in Loop" },
        auth: { createAccount: "Create an Account", createAccountSub: "Join the DévPerso community",
            loginTitle: "Login", loginSub: "Access your DévPerso account", name: "Full Name", email: "Email",
            password: "Password", confirmPassword: "Confirm Password", minPassword: "Minimum 6 characters",
            registerBtn: "Create my account", loginBtn: "Login", alreadyMember: "Already registered?",
            noAccount: "Don't have an account yet?", loginLink: "Login", registerLink: "Register", backHome: "← Back to home" },
        dashboard: { title: "Dashboard", savedQuotes: "Saved Quotes", favorites: "Favorites", dailyQuote: "Quote of the Day",
            lastQuotes: "Last Saved Quotes", welcome: "Welcome", noQuotes: "No quotes yet" },
        favorites: { title: "My Favorite Quotes", subtitle: "Click the red button to remove a quote from favorites.",
            noFavorites: "No favorites yet.", clearAll: "Clear All Favorites", confirmClear: "Are you sure you want to delete all favorites?",
            removed: "Quote removed from favorites!", cleared: "All favorites have been deleted!" },
        citations: { title: "Inspiring Quotes", subtitle: "Motivation, confidence, discipline, gratitude... find the inspiration you need.",
            newQuote: "New Quote", copy: "Copy", addFavorite: "Add to Favorites", removeFavorite: "Remove from Favorites",
            createImage: "Create Image", shareWA: "Share WhatsApp", categories: "Quotes by Category",
            motivation: "Motivation", confidence: "Confidence", discipline: "Discipline", gratitude: "Gratitude",
            success: "Success", perseverance: "Perseverance", thinkers: "Great Thinkers Quotes", all: "All" },
        challenges: { title: "Challenges", subtitle: "Take on daily challenges to transform yourself.", free: "Free", pro: "Pro",
            start: "Start", days: "days", participants: "participants", completed: "completed" },
        affirmations: { title: "Positive Affirmations", subtitle: "Repeat these affirmations daily to transform your mindset.",
            generate: "New Affirmation", copy: "Copy", favorite: "Favorite" },
        contact: { title: "Contact Us", subtitle: "Have a question? Don't hesitate to contact us.", name: "Your Name",
            email: "Your Email", message: "Your Message", send: "Send", sent: "Message sent successfully!", error: "Error sending message" },
        about: { title: "About DévPerso", mission: "Our Mission",
            missionText: "Help everyone reach their full potential through personal development tools.", team: "Our Team",
            teamText: "A team passionate about personal development and well-being.", values: "Our Values",
            val1: "Kindness", val2: "Excellence", val3: "Innovation" },
        footer: { rights: "All rights reserved", privacy: "Privacy Policy", terms: "Terms of Service", cookies: "Cookie Policy" },
        common: { loading: "Loading...", error: "An error occurred", save: "Save", cancel: "Cancel", confirm: "Confirm",
            delete: "Delete", edit: "Edit", yes: "Yes", no: "No" },
        meta: { description: "Personal Development - Inspiring quotes, positive affirmations, daily challenges to transform your life.",
            keywords: "personal development, motivation, inspiring quote, positive affirmation, challenge, wellness, self-confidence" }
    },
    
    // Spanish
    es: {
        nav: { home: "Inicio", challenges: "Desafíos", citations: "Citas", favorites: "Favoritos",
            affirmations: "Afirmaciones", dashboard: "Panel", about: "Acerca de", contact: "Contacto",
            login: "Iniciar sesión", register: "Registrarse", logout: "Cerrar sesión", myAccount: "Mi cuenta" },
        home: { title: "Despierta Tu Potencial", subtitle: "Herramientas, ejercicios y desafíos para transformar tu vida.",
            cta: "Comenzar ahora", whyTitle: "Por Qué Este Sitio?", whyDesc: "Este sitio fue creado para ayudar a todos a progresar, motivarse y alcanzar sus objetivos.",
            quoteOfDay: "Cita del Día", carouselTitle: "Citas en Bucle" },
        auth: { createAccount: "Crear una Cuenta", createAccountSub: "Únete a la comunidad DévPerso", loginTitle: "Iniciar Sesión",
            loginSub: "Accede a tu cuenta DévPerso", name: "Nombre Completo", email: "Correo Electrónico", password: "Contraseña",
            confirmPassword: "Confirmar Contraseña", minPassword: "Mínimo 6 caracteres", registerBtn: "Crear mi cuenta", loginBtn: "Iniciar sesión",
            alreadyMember: "¿Ya tienes cuenta?", noAccount: "¿No tienes cuenta todavía?", loginLink: "Iniciar sesión", registerLink: "Registrarse",
            backHome: "← Volver al inicio" },
        dashboard: { title: "Panel", savedQuotes: "Citas Guardadas", favorites: "Favoritos", dailyQuote: "Cita del Día",
            lastQuotes: "Últimas Citas Guardadas", welcome: "Bienvenido", noQuotes: "Sin citas aún" },
        favorites: { title: "Mis Citas Favoritas", subtitle: "Haz clic en el botón rojo para eliminar una cita de favoritos.",
            noFavorites: "Sin favoritos aún.", clearAll: "Borrar Todos los Favoritos",
            confirmClear: "¿Estás seguro de que quieres eliminar todos los favoritos?", removed: "¡Cita eliminada de favoritos!",
            cleared: "¡Todos los favoritos han sido eliminados!" },
        citations: { title: "Citas Inspiradoras", subtitle: "Motivación, confianza, disciplina, gratitud... encuentra la inspiración que necesitas.",
            newQuote: "Nueva Cita", copy: "Copiar", addFavorite: "Añadir a Favoritos", removeFavorite: "Quitar de Favoritos",
            createImage: "Crear Imagen", shareWA: "Compartir WhatsApp", categories: "Citas por Categoría", motivation: "Motivación",
            confidence: "Confianza", discipline: "Disciplina", gratitude: "Gratitud", success: "Éxito", perseverance: "Perseverancia",
            thinkers: "Citas de Grandes Pensadores", all: "Todo" },
        challenges: { title: "Desafíos", subtitle: "Acepta desafíos diarios para transformarte.", free: "Gratis", pro: "Pro",
            start: "Comenzar", days: "días", participants: "participantes", completed: "completado" },
        affirmations: { title: "Afirmaciones Positivas", subtitle: "Repite estas afirmaciones diariamente para transformar tu mentalidad.",
            generate: "Nueva Afirmación", copy: "Copiar", favorite: "Favorito" },
        contact: { title: "Contáctenos", subtitle: "¿Tienes una pregunta? No dudes en contactarnos.", name: "Tu Nombre",
            email: "Tu Correo", message: "Tu Mensaje", send: "Enviar", sent: "¡Mensaje enviado con éxito!", error: "Error al enviar el mensaje" },
        about: { title: "Acerca de DévPerso", mission: "Nuestra Misión",
            missionText: "Ayudar a todos a alcanzar su máximo potencial a través de herramientas de desarrollo personal.",
            team: "Nuestro Equipo", teamText: "Un equipo apasionado por el desarrollo personal y el bienestar.", values: "Nuestros Valores",
            val1: "Amabilidad", val2: "Excelencia", val3: "Innovación" },
        footer: { rights: "Todos los derechos reservados", privacy: "Política de Privacidad", terms: "Términos de Servicio", cookies: "Política de Cookies" },
        common: { loading: "Cargando...", error: "Ocurrió un error", save: "Guardar", cancel: "Cancelar", confirm: "Confirmar",
            delete: "Eliminar", edit: "Editar", yes: "Sí", no: "No" },
        meta: { description: "Desarrollo Personal - Citas inspiradoras, afirmaciones positivas, desafíos diarios para transformar tu vida.",
            keywords: "desarrollo personal, motivación, cita inspiradora, afirmación positiva, desafío, bienestar, confianza en uno mismo" }
    },
    
    // German
    de: {
        nav: { home: "Startseite", challenges: "Herausforderungen", citations: "Zitate", favorites: "Favoriten",
            affirmations: "Affirmationen", dashboard: "Dashboard", about: "Über uns", contact: "Kontakt",
            login: "Anmelden", register: "Registrieren", logout: "Abmelden", myAccount: "Mein Konto" },
        home: { title: "Wecke Dein Potenzial", subtitle: "Werkzeuge, Übungen und Herausforderungen, um dein Leben zu transformieren.",
            cta: "Jetzt starten", whyTitle: "Warum diese Seite?", whyDesc: "Diese Seite wurde erstellt, um allen zu helfen, Fortschritte zu machen, motiviert zu bleiben und ihre Ziele zu erreichen.",
            quoteOfDay: "Zitat des Tages", carouselTitle: "Zitate in Schleife" },
        auth: { createAccount: "Konto erstellen", createAccountSub: "Tritt der DévPerso-Gemeinschaft bei", loginTitle: "Anmeldung",
            loginSub: "Greife auf dein DévPerso-Konto zu", name: "Vollständiger Name", email: "E-Mail", password: "Passwort",
            confirmPassword: "Passwort bestätigen", minPassword: "Mindestens 6 Zeichen", registerBtn: "Konto erstellen", loginBtn: "Anmelden",
            alreadyMember: "Bereits registriert?", noAccount: "Noch kein Konto?", loginLink: "Anmelden", registerLink: "Registrieren",
            backHome: "← Zurück zur Startseite" },
        dashboard: { title: "Dashboard", savedQuotes: "Gespeicherte Zitate", favorites: "Favoriten", dailyQuote: "Zitat des Tages",
            lastQuotes: "Zuletzt gespeicherte Zitate", welcome: "Willkommen", noQuotes: "Noch keine Zitate" },
        favorites: { title: "Meine Lieblingszitate", subtitle: "Klicke auf den roten Button, um ein Zitat aus Favoriten zu entfernen.",
            noFavorites: "Noch keine Favoriten.", clearAll: "Alle Favoriten löschen", confirmClear: "Möchten Sie wirklich alle Favoriten löschen?",
            removed: "Zitat aus Favoriten entfernt!", cleared: "Alle Favoriten wurden gelöscht!" },
        citations: { title: "Inspirierende Zitate", subtitle: "Motivation, Vertrauen, Disziplin, Dankbarkeit... finde die Inspiration, die du brauchst.",
            newQuote: "Neues Zitat", copy: "Kopieren", addFavorite: "Zu Favoriten hinzufügen", removeFavorite: "Aus Favoriten entfernen",
            createImage: "Bild erstellen", shareWA: "WhatsApp teilen", categories: "Zitate nach Kategorie", motivation: "Motivation",
            confidence: "Vertrauen", discipline: "Disziplin", gratitude: "Dankbarkeit", success: "Erfolg", perseverance: "Beharrlichkeit",
            thinkers: "Zitate großer Denker", all: "Alle" },
        challenges: { title: "Herausforderungen", subtitle: "Nimm täglich Herausforderungen an, um dich zu transformieren.", free: "Kostenlos",
            pro: "Pro", start: "Starten", days: "Tage", participants: "Teilnehmer", completed: "abgeschlossen" },
        affirmations: { title: "Positive Affirmationen", subtitle: "Wiederhole diese Affirmationen täglich, um dein Mindset zu transformieren.",
            generate: "Neue Affirmation", copy: "Kopieren", favorite: "Favorit" },
        contact: { title: "Kontaktieren Sie uns", subtitle: "Haben Sie eine Frage? Zögern Sie nicht, uns zu kontaktieren.", name: "Ihr Name",
            email: "Ihre E-Mail", message: "Ihre Nachricht", send: "Senden", sent: "Nachricht erfolgreich gesendet!", error: "Fehler beim Senden der Nachricht" },
        about: { title: "Über DévPerso", mission: "Unsere Mission",
            missionText: "Allen helfen, ihr volles Potenzial durch Personal-Development-Tools zu erreichen.", team: "Unser Team",
            teamText: "Ein Team, das leidenschaftlich für persönliche Entwicklung und Wohlbefinden ist.", values: "Unsere Werte",
            val1: "Freundlichkeit", val2: "Exzellenz", val3: "Innovation" },
        footer: { rights: "Alle Rechte vorbehalten", privacy: "Datenschutzrichtlinie", terms: "Nutzungsbedingungen", cookies: "Cookie-Richtlinie" },
        common: { loading: "Laden...", error: "Ein Fehler ist aufgetreten", save: "Speichern", cancel: "Abbrechen", confirm: "Bestätigen",
            delete: "Löschen", edit: "Bearbeiten", yes: "Ja", no: "Nein" },
        meta: { description: "Persönliche Entwicklung - Inspirierende Zitate, positive Affirmationen, tägliche Herausforderungen, um Ihr Leben zu transformieren.",
            keywords: "persönliche Entwicklung, Motivation, inspirierendes Zitat, positive Affirmation, Herausforderung, Wohlbefinden, Selbstvertrauen" }
    },
    
    // Portuguese
    pt: {
        nav: { home: "Início", challenges: "Desafios", citations: "Citações", favorites: "Favoritos",
            affirmations: "Afirmações", dashboard: "Painel", about: "Sobre", contact: "Contato",
            login: "Entrar", register: "Cadastrar", logout: "Sair", myAccount: "Minha conta" },
        home: { title: "Desperte Seu Potencial", subtitle: "Ferramentas, exercícios e desafios para transformar sua vida.",
            cta: "Começar agora", whyTitle: "Por Que Este Site?", whyDesc: "Este site foi criado para ajudar todos a progredir, motivar-se e alcançar seus objetivos.",
            quoteOfDay: "Citação do Dia", carouselTitle: "Citações em Loop" },
        auth: { createAccount: "Criar uma Conta", createAccountSub: "Junte-se à comunidade DévPerso", loginTitle: "Entrar",
            loginSub: "Acesse sua conta DévPerso", name: "Nome Completo", email: "E-mail", password: "Senha",
            confirmPassword: "Confirmar Senha", minPassword: "Mínimo 6 caracteres", registerBtn: "Criar minha conta", loginBtn: "Entrar",
            alreadyMember: "Já tem conta?", noAccount: "Não tem conta ainda?", loginLink: "Entrar", registerLink: "Cadastrar",
            backHome: "← Voltar ao início" },
        dashboard: { title: "Painel", savedQuotes: "Citações Salvas", favorites: "Favoritos", dailyQuote: "Citação do Dia",
            lastQuotes: "Últimas Citações Salvas", welcome: "Bem-vindo", noQuotes: "Sem citações ainda" },
        favorites: { title: "Minhas Citações Favoritas", subtitle: "Clique no botão vermelho para remover uma citação dos favoritos.",
            noFavorites: "Sem favoritos ainda.", clearAll: "Limpar Todos os Favoritos", confirmClear: "Tem certeza que deseja excluir todos os favoritos?",
            removed: "Citação removida dos favoritos!", cleared: "Todos os favoritos foram excluídos!" },
        citations: { title: "Citações Inspiradoras", subtitle: "Motivação, confiança, disciplina, gratidão... encontre a inspiração que você precisa.",
            newQuote: "Nova Citação", copy: "Copiar", addFavorite: "Adicionar aos Favoritos", removeFavorite: "Remover dos Favoritos",
            createImage: "Criar Imagem", shareWA: "Compartilhar WhatsApp", categories: "Citações por Categoria", motivation: "Motivação",
            confidence: "Confiança", discipline: "Disciplina", gratitude: "Gratidão", success: "Sucesso", perseverance: "Perseverança",
            thinkers: "Citações de Grandes Pensadores", all: "Todos" },
        challenges: { title: "Desafios", subtitle: "Acompanhe desafios diários para se transformar.", free: "Grátis", pro: "Pro",
            start: "Começar", days: "dias", participants: "participantes", completed: "concluído" },
        affirmations: { title: "Afirmações Positivas", subtitle: "Repita estas afirmações diariamente para transformar sua mentalidade.",
            generate: "Nova Afirmação", copy: "Copiar", favorite: "Favorito" },
        contact: { title: "Fale Conosco", subtitle: "Tem uma pergunta? Não hesite em nos contatar.", name: "Seu Nome",
            email: "Seu E-mail", message: "Sua Mensagem", send: "Enviar", sent: "Mensagem enviada com sucesso!", error: "Erro ao enviar mensagem" },
        about: { title: "Sobre DévPerso", mission: "Nossa Missão",
            missionText: "Ajudar todos a alcançar seu pleno potencial através de ferramentas de desenvolvimento pessoal.", team: "Nossa Equipe",
            teamText: "Uma equipe apaixonada por desenvolvimento pessoal e bem-estar.", values: "Nossos Valores",
            val1: "Gentileza", val2: "Excelência", val3: "Inovação" },
        footer: { rights: "Todos os direitos reservados", privacy: "Política de Privacidade", terms: "Termos de Uso", cookies: "Política de Cookies" },
        common: { loading: "Carregando...", error: "Ocorreu um erro", save: "Salvar", cancel: "Cancelar", confirm: "Confirmar",
            delete: "Excluir", edit: "Editar", yes: "Sim", no: "Não" },
        meta: { description: "Desenvolvimento Pessoal - Citações inspiradoras, afirmações positivas, desafios diários para transformar sua vida.",
            keywords: "desenvolvimento pessoal, motivação, citação inspiradora, afirmação positiva, desafio, bem-estar, autoconfiança" }
    },
    
    // Italian
    it: {
        nav: { home: "Home", challenges: "Sfide", citations: "Citazioni", favorites: "Preferiti",
            affirmations: "Affermazioni", dashboard: "Dashboard", about: "Chi siamo", contact: "Contatti",
            login: "Accedi", register: "Registrati", logout: "Esci", myAccount: "Il mio account" },
        home: { title: "Risveglia Il Tuo Potenziale", subtitle: "Strumenti, esercizi e sfide per trasformare la tua vita.",
            cta: "Inizia ora", whyTitle: "Perché Questo Sito?", whyDesc: "Questo sito è stato creato per aiutare tutti a progredire, motivarsi e raggiungere i propri obiettivi.",
            quoteOfDay: "Citazione del Giorno", carouselTitle: "Citazioni in Loop" },
        auth: { createAccount: "Crea un Account", createAccountSub: "Unisciti alla community DévPerso", loginTitle: "Accedi",
            loginSub: "Accedi al tuo account DévPerso", name: "Nome Completo", email: "Email", password: "Password",
            confirmPassword: "Conferma Password", minPassword: "Minimo 6 caratteri", registerBtn: "Crea il mio account", loginBtn: "Accedi",
            alreadyMember: "Già registrato?", noAccount: "Non hai ancora un account?", loginLink: "Accedi", registerLink: "Registrati",
            backHome: "← Torna alla home" },
        dashboard: { title: "Dashboard", savedQuotes: "Citazioni Salvate", favorites: "Preferiti", dailyQuote: "Citazione del Giorno",
            lastQuotes: "Ultime Citazioni Salvate", welcome: "Benvenuto", noQuotes: "Nessuna citazione ancora" },
        favorites: { title: "Le Mie Citazioni Preferite", subtitle: "Clicca sul pulsante rosso per rimuovere una citazione dai preferiti.",
            noFavorites: "Nessun preferito ancora.", clearAll: "Cancella Tutti i Preferiti", confirmClear: "Sei sicuro di voler eliminare tutti i preferiti?",
            removed: "Citazione rimossa dai preferiti!", cleared: "Tutti i preferiti sono stati eliminati!" },
        citations: { title: "Citazioni Ispiranti", subtitle: "Motivazione, fiducia, disciplina, gratitudine... trova l'ispirazione di cui hai bisogno.",
            newQuote: "Nuova Citazione", copy: "Copia", addFavorite: "Aggiungi ai Preferiti", removeFavorite: "Rimuovi dai Preferiti",
            createImage: "Crea Immagine", shareWA: "Condividi WhatsApp", categories: "Citazioni per Categoria", motivation: "Motivazione",
            confidence: "Fiducia", discipline: "Disciplina", gratitude: "Gratitudine", success: "Successo", perseverance: "Perseveranza",
            thinkers: "Citazioni di Grandi Pensatori", all: "Tutto" },
        challenges: { title: "Sfide", subtitle: "Affronta sfide quotidiane per trasformarti.", free: "Gratis", pro: "Pro",
            start: "Inizia", days: "giorni", participants: "partecipanti", completed: "completato" },
        affirmations: { title: "Affermazioni Positive", subtitle: "Ripeti queste affermazioni ogni giorno per trasformare il tuo mindset.",
            generate: "Nuova Affermazione", copy: "Copia", favorite: "Preferito" },
        contact: { title: "Contattaci", subtitle: "Hai una domanda? Non esitare a contattarci.", name: "Il tuo nome",
            email: "La tua email", message: "Il tuo messaggio", send: "Invia", sent: "Messaggio inviato con successo!", error: "Errore nell'invio del messaggio" },
        about: { title: "Su DévPerso", mission: "La Nostra Missione",
            missionText: "Aiutare tutti a raggiungere il proprio pieno potenziale attraverso strumenti di sviluppo personale.", team: "Il Nostro Team",
            teamText: "Un team appassionato di sviluppo personale e benessere.", values: "I Nostri Valori",
            val1: "Gentilezza", val2: "Eccellenza", val3: "Innovazione" },
        footer: { rights: "Tutti i diritti riservati", privacy: "Informativa sulla Privacy", terms: "Termini di Servizio", cookies: "Cookie Policy" },
        common: { loading: "Caricamento...", error: "Si è verificato un errore", save: "Salva", cancel: "Annulla", confirm: "Conferma",
            delete: "Eliminare", edit: "Modifica", yes: "Sì", no: "No" },
        meta: { description: "Sviluppo Personale - Citazioni ispiranti, affermazioni positive, sfide quotidiane per trasformare la tua vita.",
            keywords: "sviluppo personale, motivazione, citazione ispirante, affermazione positiva, sfida, benessere, fiducia in sé" }
    },
    
    // Arabic
    ar: {
        nav: { home: "الرئيسية", challenges: "التحديات", citations: "اقتباسات", favorites: "المفضلة",
            affirmations: "تأكيدات", dashboard: "لوحة التحكم", about: "من نحن", contact: "اتصل بنا",
            login: "تسجيل الدخول", register: "إنشاء حساب", logout: "تسجيل الخروج", myAccount: "حسابي" },
        home: { title: "استفقط إمكاناتك", subtitle: "أدوات وتمارين وتحديات لتحويل حياتك.",
            cta: "ابدأ الآن", whyTitle: "لماذا هذا الموقع؟", whyDesc: "تم إنشاء هذا الموقع لمساعدة الجميع على التقدم والتحفيز وتحقيق أهدافهم.",
            quoteOfDay: "اقتباس اليوم", carouselTitle: "اقتباسات متكررة" },
        auth: { createAccount: "إنشاء حساب", createAccountSub: "انضم إلى مجتمع DévPerso", loginTitle: "تسجيل الدخول",
            loginSub: "الوصول إلى حساب DévPerso الخاص بك", name: "الاسم الكامل", email: "البريد الإلكتروني", password: "كلمة المرور",
            confirmPassword: "تأكيد كلمة المرور", minPassword: "6 أحرف على الأقل", registerBtn: "إنشاء حسابي", loginBtn: "تسجيل الدخول",
            alreadyMember: "لديك حساب بالفعل؟", noAccount: "ليس لديك حساب بعد؟", loginLink: "تسجيل الدخول", registerLink: "إنشاء حساب",
            backHome: "← العودة إلى الصفحة الرئيسية" },
        dashboard: { title: "لوحة التحكم", savedQuotes: "الاقتباسات المحفوظة", favorites: "المفضلة", dailyQuote: "اقتباس اليوم",
            lastQuotes: "آخر الاقتباسات المحفوظة", welcome: "مرحباً", noQuotes: "لا توجد اقتباسات بعد" },
        favorites: { title: "اقتبساتي المفضلة", subtitle: "انقر على الزر الأحمر لإزالة الاقتباس من المفضلة.",
            noFavorites: "لا توجد مفضلات بعد.", clearAll: "مسح كل المفضلات", confirmClear: "هل أنت متأكد من حذف جميع المفضلات؟",
            removed: "تمت إزالة الاقتباس من المفضلة!", cleared: "تم حذف جميع المفضلات!" },
        citations: { title: "اقتباسات ملهمة", subtitle: "التحفيز والثقة بالنفس والانضباط والامتنان... اعثر على الإلهام الذي تحتاجه.",
            newQuote: "اقتباس جديد", copy: "نسخ", addFavorite: "إضافة إلى المفضلة", removeFavorite: "إزالة من المفضلة",
            createImage: "إنشاء صورة", shareWA: "مشاركة واتساب", categories: "الاقتباسات حسب الفئة", motivation: "التحفيز",
            confidence: "الثقة بالنفس", discipline: "الانضباط", gratitude: "الامتنان", success: "النجاح", perseverance: "المثابرة",
            thinkers: "اقتباسات المفكرين العظماء", all: "الكل" },
        challenges: { title: "التحديات", subtitle: "خوض تحديات يومية لتحويل نفسك.", free: "مجاني", pro: "احترافي",
            start: "ابدأ", days: "أيام", participants: "مشاركون", completed: "مكتمل" },
        affirmations: { title: "تأكيدات إيجابية", subtitle: "كرر هذه التأكيدات يوميًا لتحويل طريقة تفكيرك.",
            generate: "تأكيد جديد", copy: "نسخ", favorite: "مفضل" },
        contact: { title: "اتصل بنا", subtitle: "لديك سؤال؟ لا تتردد في التواصل معنا.", name: "اسمك",
            email: "بريدك الإلكتروني", message: "رسالتك", send: "إرسال", sent: "تم إرسال الرسالة بنجاح!", error: "خطأ في إرسال الرسالة" },
        about: { title: "حول DévPerso", mission: "مهمتنا",
            missionText: "مساعدة الجميع على تحقيق إمكاناتهم الكاملة من خلال أدوات التنمية البشرية.", team: "فريقنا",
            teamText: "فريق شغوف بالتنمية البشرية والرفاهية.", values: "قيمنا",
            val1: "اللطف", val2: "التميز", val3: "الابتكار" },
        footer: { rights: "جميع الحقوق محفوظة", privacy: "سياسة الخصوصية", terms: "شروط الخدمة", cookies: "سياسة ملفات تعريف الارتباط" },
        common: { loading: "جار التحميل...", error: "حدث خطأ", save: "حفظ", cancel: "إلغاء", confirm: "تأكيد",
            delete: "حذف", edit: "تعديل", yes: "نعم", no: "لا" },
        meta: { description: "التنمية البشرية - اقتباسات ملهمة وتأكيدات إيجابية وتحديات يومية لتحويل حياتك.",
            keywords: "التنمية البشرية والتحفيز واقتباس ملهم وتأكيد إيجابي وتحدي والرفاهية والثقة بالنفس" }
    },
    
    // Chinese
    zh: {
        nav: { home: "首页", challenges: "挑战", citations: "名言", favorites: "收藏",
            affirmations: "肯定语", dashboard: "仪表板", about: "关于", contact: "联系我们",
            login: "登录", register: "注册", logout: "退出", myAccount: "我的账户" },
        home: { title: "唤醒你的潜能", subtitle: "工具、练习和挑战，改变你的生活。",
            cta: "立即开始", whyTitle: "为什么这个网站？", whyDesc: "这个网站是为了帮助每个人进步、激励自己并实现目标而创建的。",
            quoteOfDay: "每日名言", carouselTitle: "循环名言" },
        auth: { createAccount: "创建账户", createAccountSub: "加入DévPerso社区", loginTitle: "登录",
            loginSub: "访问您的DévPerso账户", name: "全名", email: "电子邮件", password: "密码",
            confirmPassword: "确认密码", minPassword: "至少6个字符", registerBtn: "创建我的账户", loginBtn: "登录",
            alreadyMember: "已经注册？", noAccount: "还没有账户？", loginLink: "登录", registerLink: "注册",
            backHome: "← 返回首页" },
        dashboard: { title: "仪表板", savedQuotes: "保存的名言", favorites: "收藏", dailyQuote: "每日名言",
            lastQuotes: "最近保存的名言", welcome: "欢迎", noQuotes: "暂无名言" },
        favorites: { title: "我的收藏名言", subtitle: "点击红色按钮从收藏中删除名言。",
            noFavorites: "暂无收藏。", clearAll: "清除所有收藏", confirmClear: "确定要删除所有收藏吗？",
            removed: "名言已从收藏中移除！", cleared: "所有收藏已被删除！" },
        citations: { title: "励志名言", subtitle: "动力、自信、纪律、感恩...找到你需要灵感。",
            newQuote: "新名言", copy: "复制", addFavorite: "添加到收藏", removeFavorite: "从收藏中移除",
            createImage: "创建图片", shareWA: "分享到WhatsApp", categories: "分类名言", motivation: "动力",
            confidence: "自信", discipline: "纪律", gratitude: "感恩", success: "成功", perseverance: "坚持",
            thinkers: "伟人名言", all: "全部" },
        challenges: { title: "挑战", subtitle: "接受每日挑战来改变自己。", free: "免费", pro: "专业版",
            start: "开始", days: "天", participants: "参与者", completed: "已完成" },
        affirmations: { title: "积极肯定语", subtitle: "每天重复这些肯定语来改变你的心态。",
            generate: "新肯定语", copy: "复制", favorite: "收藏" },
        contact: { title: "联系我们", subtitle: "有问题？请随时联系我们。", name: "您的姓名",
            email: "您的邮箱", message: "您的留言", send: "发送", sent: "留言发送成功！", error: "发送留言时出错" },
        about: { title: "关于DévPerso", mission: "我们的使命",
            missionText: "通过个人发展工具帮助每个人发挥全部潜能。", team: "我们的团队",
            teamText: "一个热爱个人发展和幸福的团队。", values: "我们的价值观",
            val1: "善良", val2: "卓越", val3: "创新" },
        footer: { rights: "版权所有", privacy: "隐私政策", terms: "服务条款", cookies: "Cookie政策" },
        common: { loading: "加载中...", error: "发生错误", save: "保存", cancel: "取消", confirm: "确认",
            delete: "删除", edit: "编辑", yes: "是", no: "否" },
        meta: { description: "个人发展 - 励志名言、积极肯定语、每日挑战，改变你的生活。",
            keywords: "个人发展、动力、励志名言、积极肯定语、挑战、幸福、自信" }
    },
    
    // Japanese
    ja: {
        nav: { home: "ホーム", challenges: "チャレンジ", citations: "名言", favorites: "お気に入り",
            affirmations: "アファメーション", dashboard: "ダッシュボード", about: "概要", contact: "お問い合わせ",
            login: "ログイン", register: "登録", logout: "ログアウト", myAccount: "マイアカウント" },
        home: { title: "可能性を目覚めさせよう", subtitle: "人生を変えるツール、演習、チャレンジ。",
            cta: "今すぐ始める", whyTitle: "このサイトの理由は？", whyDesc: "このサイトは、みんなが前進し、モチベーションを保ち、目標を達成できるようにするために作られました。",
            quoteOfDay: "今日の名言", carouselTitle: "ループ名言" },
        auth: { createAccount: "アカウント作成", createAccountSub: "DévPersoコミュニティに参加", loginTitle: "ログイン",
            loginSub: "DévPersoアカウントにアクセス", name: "氏名", email: "メールアドレス", password: "パスワード",
            confirmPassword: "パスワード確認", minPassword: "6文字以上", registerBtn: "アカウント作成", loginBtn: "ログイン",
            alreadyMember: "登録済み？", noAccount: "まだアカウントがない？", loginLink: "ログイン", registerLink: "登録",
            backHome: "← ホームに戻る" },
        dashboard: { title: "ダッシュボード", savedQuotes: "保存した名言", favorites: "お気に入り", dailyQuote: "今日の名言",
            lastQuotes: "最近保存した名言", welcome: "ようこそ", noQuotes: "名言はまだありません" },
        favorites: { title: "お気に入りの名言", subtitle: "赤いボタンをクリックして名言をお気に入りから削除します。",
            noFavorites: "お気に入りはまだありません。", clearAll: "すべて削除", confirmClear: "すべて削除しますか？",
            removed: "お気に入りから削除しました！", cleared: "すべて削除しました！" },
        citations: { title: "インスピレーション名言", subtitle: " Motivation、Confidence、Discipline、Gratitude...你需要灵感。",
            newQuote: "新しい名言", copy: "コピー", addFavorite: "お気に入りに追加", removeFavorite: "お気に入りから削除",
            createImage: "画像作成", shareWA: "WhatsAppで共有", categories: "カテゴリー別名言", motivation: "動機",
            confidence: "自信", discipline: "規律", gratitude: "感謝", success: "成功", perseverance: "忍耐",
            thinkers: "偉人の名言", all: "すべて" },
        challenges: { title: "チャレンジ", subtitle: "毎日のチャレンジを受けて自分自身を変革しましょう。", free: "無料", pro: "プロ",
            start: "開始", days: "日", participants: "参加者", completed: "完了" },
        affirmations: { title: "ポジティブなアファメーション", subtitle: "これらのアファメーションを毎日繰り返してマインドセットを変革しましょう。",
            generate: "新しいアファメーション", copy: "コピー", favorite: "お気に入り" },
        contact: { title: "お問い合わせ", subtitle: "ご質問はありませんか？お気軽にご連絡ください。", name: "お名前",
            email: "メールアドレス", message: "メッセージ", send: "送信", sent: "メッセージが送信されました！", error: "送信エラー" },
        about: { title: "DévPersoについて", mission: "私たちの使命",
            missionText: "パーソナル開発ツールを通じて、みんなが自分の可能性を最大限に引き出すのを助けること。", team: "私たちのチーム",
            teamText: "パーソナル開発と幸福に情熱を持つチーム。", values: "私たちの価値観",
            val1: "思いやり", val2: "卓越", val3: "革新" },
        footer: { rights: "全著作権所有", privacy: "プライバシーポリシー", terms: "利用規約", cookies: "Cookieポリシー" },
        common: { loading: "読み込み中...", error: "エラーが発生しました", save: "保存", cancel: "キャンセル", confirm: "確認",
            delete: "削除", edit: "編集", yes: "はい", no: "いいえ" },
        meta: { description: "パーソナル開発 - インスピレーション名言、ポジティブなアファメーション、人生を変える毎日のチャレンジ。",
            keywords: "パーソナル開発、動機、インスピレーション名言、ポジティブなアファメーション、チャレンジ、幸福、自己信頼" }
    }
};

// Available languages
const availableLanguages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' }
];

// Current language
let currentLang = localStorage.getItem('devperso_lang') || 'fr';

// Get translation
function t(key) {
    const keys = key.split('.');
    let value = translations[currentLang];
    
    for (const k of keys) {
        if (value && value[k]) {
            value = value[k];
        } else {
            value = translations['fr'];
            for (const k2 of keys) {
                if (value && value[k2]) {
                    value = value[k2];
                } else {
                    return key;
                }
            }
            break;
        }
    }
    
    return typeof value === 'string' ? value : key;
}

// Set language
function setLanguage(lang) {
    if (translations[lang]) {
        currentLang = lang;
        localStorage.setItem('devperso_lang', lang);
        updatePageContent();
        updateLanguageSelector();
        window.dispatchEvent(new Event('languageChanged'));
    }
}

// Get current language
function getCurrentLanguage() {
    return currentLang;
}

// Get available languages
function getAvailableLanguages() {
    return availableLanguages;
}

// Update language selector UI
function updateLanguageSelector() {
    const selector = document.getElementById('languageSelector');
    if (selector) {
        selector.innerHTML = '';
        availableLanguages.forEach(lang => {
            const btn = document.createElement('button');
            btn.className = `dropdown-item ${lang.code === currentLang ? 'active' : ''}`;
            btn.onclick = () => setLanguage(lang.code);
            btn.innerHTML = `${lang.flag} ${lang.name}`;
            selector.appendChild(btn);
        });
        
        const currentFlag = document.getElementById('currentLangFlag');
        if (currentFlag) {
            const current = availableLanguages.find(l => l.code === currentLang);
            if (current) {
                currentFlag.innerHTML = current.flag;
            }
        }
    }
}

// Update page content with translations
function updatePageContent() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });
    
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        el.title = t(key);
    });
    
    document.documentElement.lang = currentLang;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', t('meta.description'));
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
        metaKeywords.setAttribute('content', t('meta.keywords'));
    }
}

// Create language selector HTML
function createLanguageSelector(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const current = availableLanguages.find(l => l.code === currentLang);
    
    container.innerHTML = `
        <div class="dropdown">
            <button class="btn btn-outline-light dropdown-toggle" type="button" id="langDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                <span id="currentLangFlag">${current ? current.flag : '🌐'}</span> ${current ? current.name : 'Langue'}
            </button>
            <ul class="dropdown-menu dropdown-menu-end" id="languageSelector" aria-labelledby="langDropdown">
            </ul>
        </div>
    `;
    
    updateLanguageSelector();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updatePageContent();
});
