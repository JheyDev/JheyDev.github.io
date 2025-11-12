// Navegação responsiva
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Navegação ativa baseada na seção atual
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// Animação de entrada dos elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animação
document.querySelectorAll('.testimonial-card, .skill-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return; // Ignora links vazios

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação dos ícones de habilidades
const skillIcons = document.querySelectorAll('.skill-icon');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }, index * 100);
        }
    });
}, { threshold: 0.5 });

skillIcons.forEach(icon => {
    icon.style.opacity = '0';
    icon.style.transform = 'translateY(20px) scale(0.8)';
    icon.style.transition = 'all 0.4s ease';
    skillObserver.observe(icon);
});

// Animação dos cards de feedback
const testimonialCards = document.querySelectorAll('.testimonial-card');

testimonialCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateX(-50px)';
    card.style.transition = `all 0.6s ease ${index * 0.2}s`;
});

const testimonialObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, { threshold: 0.3 });

testimonialCards.forEach(card => {
    testimonialObserver.observe(card);
});

// Animação dos ícones sociais
const socialIcons = document.querySelectorAll('.social-icon');

socialIcons.forEach((icon, index) => {
    icon.style.opacity = '0';
    icon.style.transform = 'translateY(30px) rotate(180deg)';
    icon.style.transition = `all 0.5s ease ${index * 0.1}s`;
});

const socialObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) rotate(0deg)';
        }
    });
}, { threshold: 0.5 });

socialIcons.forEach(icon => {
    socialObserver.observe(icon);
});

// Efeito parallax sutil no hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.cyber-grid');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Adicionar classe de carregamento
    document.body.classList.add('loaded');
});

// Efeito de digitação no hero (opcional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Aplicar efeito de digitação ao carregar a página (opcional)
window.addEventListener('load', () => {
    const heroDescription = document.querySelector('.hero-description');
    if (heroDescription) {
        const originalText = heroDescription.textContent;
        setTimeout(() => {
            typeWriter(heroDescription, originalText, 50);
        }, 1000);
    }
});

/**
 * Controla o fluxo de animação do banner: Glitch Inicial -> Flicker Suave.
 */
function startAnimationFlow() {
    const titleElement = document.getElementById('main-title');
    if (!titleElement) return;

    // 1. Ativa o Glitch de Inicialização (1.2s)
    titleElement.classList.add('initial-glitch-active');

    // 2. Após o Glitch Inicial, inicia o Flicker Suave e Intermitente
    setTimeout(() => {
        titleElement.classList.remove('initial-glitch-active');
        titleElement.classList.add('flicker-active');
    }, 1200); // 1.2 segundos para a animação inicial
}

document.addEventListener('DOMContentLoaded', () => {
    startAnimationFlow();
});

// Lógica para o Toggle de Tema (Light/Dark Mode)
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;

// Função para aplicar o tema
function applyTheme(theme) {
    if (theme === 'dark') {
        htmlEl.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        htmlEl.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    }
}

// Verifica o tema salvo no localStorage ao carregar a página
const savedTheme = localStorage.getItem('theme') || 'light'; // Padrão é 'light'
applyTheme(savedTheme);

// Adiciona o evento de clique ao botão
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlEl.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
});

// Lógica da Seção de Projetos Interativa
document.addEventListener('DOMContentLoaded', () => {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const showcaseImage = document.getElementById('showcase-image');
    const showcaseTitle = document.getElementById('showcase-title');
    const showcaseDescription = document.getElementById('showcase-description');
    const showcaseDemoBtn = document.getElementById('showcase-demo-btn');
    const showcaseRepoBtn = document.getElementById('showcase-repo-btn');
    const imageOverlayCategory = document.getElementById('image-overlay-category');
    const imageOverlayTags = document.getElementById('image-overlay-tags');
    const projectsCarousel = document.querySelector('.projects-carousel');
    const carouselPrevBtn = document.getElementById('carousel-prev');
    const carouselNextBtn = document.getElementById('carousel-next');


    function updateShowcase(item) {
        // Atualiza o conteúdo do showcase com os dados do item clicado
        showcaseImage.style.backgroundImage = `url('${item.dataset.image}')`;
        showcaseTitle.textContent = item.dataset.title;
        showcaseDescription.textContent = item.dataset.description;
        showcaseDemoBtn.href = item.dataset.demoLink;
        showcaseRepoBtn.href = item.dataset.repoLink;

        // Atualiza a sobreposição da imagem
        imageOverlayCategory.textContent = item.dataset.category;
        imageOverlayTags.innerHTML = ''; // Limpa as tags antigas
        if (item.dataset.tags) {
            const tags = item.dataset.tags.split(',');
            tags.forEach(tagText => {
                const tagElement = document.createElement('span');
                tagElement.className = 'overlay-tag';
                tagElement.textContent = tagText.trim();
                imageOverlayTags.appendChild(tagElement);
            });
        }

        // Gerencia a visibilidade do botão de repositório
        showcaseRepoBtn.style.display = 'inline-block'; // Garante que o botão sempre apareça

        // Atualiza a classe 'active'
        carouselItems.forEach(el => el.classList.remove('active'));
        item.classList.add('active');
    }

    // Adiciona o evento de clique a cada item do carrossel
    carouselItems.forEach(item => {
        item.addEventListener('click', () => updateShowcase(item));
    });

    // Inicializa o showcase com o primeiro projeto
    if (carouselItems.length > 0) {
        updateShowcase(carouselItems[0]);
    }

    // Lógica de navegação do carrossel
    if (projectsCarousel && carouselPrevBtn && carouselNextBtn) {
        const scrollAmount = 195; // Largura de um card + gap (180px + ~1rem)

        carouselNextBtn.addEventListener('click', () => {
            projectsCarousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        carouselPrevBtn.addEventListener('click', () => {
            projectsCarousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }
});