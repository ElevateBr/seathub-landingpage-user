/* // ========================================
// SISTEMA DE TRADUÇÃO - SEATHUB LANDING PAGE
// ========================================

// Importar todas as traduções
const ptBrTranslations = window.ptBrTranslations || {};
const enTranslations = window.enTranslations || {};
const esTranslations = window.esTranslations || {};

// Objeto principal de traduções
const translations = {
    'pt-br': ptBrTranslations,
    'en': enTranslations,
    'es': esTranslations
};

// Variável global para controlar o idioma atual
let currentLanguage = 'pt-br';

// Função principal de tradução
function translatePage(lang) {
    currentLanguage = lang;
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        
        // Lógica especial para o H1
        if (key === 'hero-title') {
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
            return;
        }
        
        // Para outros elementos, traduz normalmente
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });

    // Atualizar botões de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
}

// Função para obter tradução específica
function getTranslation(key, lang = currentLanguage) {
    return translations[lang] && translations[lang][key] ? translations[lang][key] : key;
}

// Função para adicionar data-translate aos elementos
function initializeTranslationElements() {
    const elementsToTranslate = {
        // Header
        '.nav-menu a[href="#explore"]': 'nav-benefits',
        '.nav-menu a[href="#how-it-works"]': 'nav-how-it-works',
        '.nav-menu a[href="#amenities"]': 'nav-amenities',
        '.nav-menu a[href="#app"]': 'nav-app',
        '.nav-menu a[href="#testimonials"]': 'nav-testimonials',
        '.header-cta': 'header-cta',
        
        // Hero Section
        '#hero-title': 'hero-title',
        '.hero-text p': 'hero-subtitle',
        '.btn-primary': 'hero-cta-primary',
        '.btn-secondary': 'hero-cta-secondary',
        '.stat-item:nth-child(1) .stat-label': 'stat-spaces',
        '.stat-item:nth-child(2) .stat-label': 'stat-users',
        '.stat-item:nth-child(3) .stat-label': 'stat-cities',
        
        // Benefits Section
        '.benefits-section .section-title': 'benefits-title',
        '.benefits-section .section-subtitle': 'benefits-subtitle',
        '.benefit-card:nth-child(1) .benefit-title': 'benefit-search',
        '.benefit-card:nth-child(1) .benefit-description': 'benefit-search-desc',
        '.benefit-card:nth-child(2) .benefit-title': 'benefit-24-7',
        '.benefit-card:nth-child(2) .benefit-description': 'benefit-24-7-desc',
        '.benefit-card:nth-child(3) .benefit-title': 'benefit-security',
        '.benefit-card:nth-child(3) .benefit-description': 'benefit-security-desc',
        '.benefit-card:nth-child(4) .benefit-title': 'benefit-networking',
        '.benefit-card:nth-child(4) .benefit-description': 'benefit-networking-desc',
        '.benefit-card:nth-child(5) .benefit-title': 'benefit-infrastructure',
        '.benefit-card:nth-child(5) .benefit-description': 'benefit-infrastructure-desc',
        '.benefit-card:nth-child(6) .benefit-title': 'benefit-pricing',
        '.benefit-card:nth-child(6) .benefit-description': 'benefit-pricing-desc',
        
        // How it Works Section
        '.how-it-works-section .section-title': 'how-title',
        '.how-it-works-section .section-subtitle': 'how-subtitle',
        '.step-item:nth-child(1) .step-title': 'step-1',
        '.step-item:nth-child(1) .step-description': 'step-1-desc',
        '.step-item:nth-child(2) .step-title': 'step-2',
        '.step-item:nth-child(2) .step-description': 'step-2-desc',
        '.step-item:nth-child(3) .step-title': 'step-3',
        '.step-item:nth-child(3) .step-description': 'step-3-desc',
        
        // Amenities Section
        '.amenities-section .section-title': 'amenities-title',
        '.amenities-section .section-subtitle': 'amenities-subtitle',
        '.amenity-item:nth-child(1) .amenity-text': 'amenity-coffee',
        '.amenity-item:nth-child(2) .amenity-text': 'amenity-kitchen',
        '.amenity-item:nth-child(3) .amenity-text': 'amenity-ac',
        '.amenity-item:nth-child(4) .amenity-text': 'amenity-locker',
        '.amenity-item:nth-child(5) .amenity-text': 'amenity-parking',
        '.amenity-item:nth-child(6) .amenity-text': 'amenity-social',
        '.image-overlay h3': 'amenities-image-title',
        '.image-overlay p': 'amenities-image-desc',
        
        // App Section
        '.app-section h2': 'app-title',
        '.app-section p': 'app-subtitle',
        '.app-features li:nth-child(1)': 'app-feature-1',
        '.app-features li:nth-child(2)': 'app-feature-2',
        '.app-features li:nth-child(3)': 'app-feature-3',
        '.app-features li:nth-child(4)': 'app-feature-4',
        '.app-features li:nth-child(5)': 'app-feature-5',
        '.app-features li:nth-child(6)': 'app-feature-6',
        '.app-buttons .app-button:nth-child(1)': 'app-store',
        '.app-buttons .app-button:nth-child(2)': 'google-play',
        
        // Testimonials Section
        '.testimonials-section .section-title': 'testimonials-title',
        '.testimonials-section .section-subtitle': 'testimonials-subtitle',
        '.testimonial-card:nth-child(1) .testimonial-quote': 'testimonial-1',
        '.testimonial-card:nth-child(2) .testimonial-quote': 'testimonial-2',
        '.testimonial-card:nth-child(3) .testimonial-quote': 'testimonial-3',
        
        // CTA Section
        '.cta-title': 'cta-title',
        '.cta-subtitle': 'cta-subtitle',
        '.cta-primary': 'cta-primary',
        '.cta-secondary': 'cta-secondary',
        
        // Footer
        '.footer-tagline': 'footer-tagline',
        '.footer-section h4': 'footer-developed',
        '.footer-section li a': 'footer-elevate',
        '.footer-copyright': 'footer-copyright',
        '.footer-developer': 'footer-developer'
    };

    Object.entries(elementsToTranslate).forEach(([selector, key]) => {
        const element = document.querySelector(selector);
        if (element) {
            element.setAttribute('data-translate', key);
        }
    });
}

// Função para configurar event listeners de tradução
function setupTranslationListeners() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            translatePage(lang);
        });
    });
}

// Função para inicializar o sistema de tradução
function initTranslationSystem() {
    initializeTranslationElements();
    setupTranslationListeners();
    translatePage('pt-br'); // Inicializar com português brasileiro
}

// Exportar funções para uso global
window.translatePage = translatePage;
window.getTranslation = getTranslation;
window.initTranslationSystem = initTranslationSystem; */