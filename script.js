// DOM Elements: Seleciona os elementos do DOM que serão manipulados
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const skillProgress = document.querySelectorAll('.skill-progress');
const ctaButton = document.querySelector('.cta-button');

// Mobile Navigation Toggle: Adiciona um evento de clique ao ícone de hambúrguer para alternar o menu mobile
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // Adiciona/remove a classe 'active' para animar o ícone
    navMenu.classList.toggle('active');   // Adiciona/remove a classe 'active' para mostrar/esconder o menu
});

// Close mobile menu when clicking on a link: Fecha o menu mobile ao clicar em um link de navegação
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active'); // Remove a classe 'active' do ícone de hambúrguer
        navMenu.classList.remove('active');   // Esconde o menu mobile
    });
});

// Smooth scrolling for navigation links: Adiciona rolagem suave para links de navegação
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Previne o comportamento padrão do link (salto instantâneo)
        const targetId = link.getAttribute('href'); // Obtém o ID da seção de destino (ex: #about)
        const targetElement = document.querySelector(targetId); // Seleciona o elemento de destino
        
        if (targetElement) {
            // Calcula a posição de rolagem, ajustando para o cabeçalho fixo
            const offsetTop = targetElement.offsetTop - 70; 
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth' // Ativa a rolagem suave
            });
        }
    });
});

// CTA Button smooth scroll: Rolagem suave para o botão "Ver Projetos"
ctaButton.addEventListener('click', (e) => {
    e.preventDefault(); // Previne o comportamento padrão do link
    const targetElement = document.querySelector('#projects'); // Define a seção de projetos como destino
    const offsetTop = targetElement.offsetTop - 70; // Ajusta para o cabeçalho fixo
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
});

// Intersection Observer for fade-in animations: Configura o observador para animações de entrada
const observerOptions = {
    threshold: 0.1, // O elemento é considerado visível quando 10% dele está na viewport
    rootMargin: '0px 0px -50px 0px' // Margem para acionar o observador antes do elemento entrar completamente
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { // Se o elemento está na viewport
            entry.target.classList.add('visible'); // Adiciona a classe 'visible' para acionar a animação
            
            // Anima as barras de habilidade quando a seção de habilidades é visível
            if (entry.target.id === 'skills') {
                animateSkillBars();
            }
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them: Adiciona a classe 'fade-in' e observa elementos para animação
const fadeElements = document.querySelectorAll('.project-card, .skill-item, .highlight-card, .about-text, .contact-info, .contact-content-social'); // Atualizado para nova classe de contato
fadeElements.forEach(el => {
    el.classList.add('fade-in'); // Adiciona a classe inicial para a animação
    observer.observe(el); // Começa a observar o elemento
});

// Observe sections for animations: Observa as seções para a animação de "fade-in"
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    observer.observe(section);
});

// Animate skill bars: Função para animar as barras de progresso das habilidades
function animateSkillBars() {
    skillProgress.forEach(bar => {
        const progress = bar.getAttribute('data-progress'); // Obtém o valor de progresso do atributo data-progress
        setTimeout(() => {
            bar.style.width = progress + '%'; // Define a largura da barra para animar
        }, 200); // Pequeno atraso para a animação
    });
}

// Header background change on scroll: Altera o fundo do cabeçalho ao rolar a página
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) { // Se a rolagem for maior que 100px
        navbar.style.background = 'rgba(10, 10, 10, 0.95)'; // Fundo mais opaco
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.9)'; // Fundo original
    }
});

// REMOVIDO: Parallax effect for hero section (Removido para resolver a sobreposição)
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const hero = document.querySelector('.hero');
//     const heroContent = document.querySelector('.hero-content');
    
//     if (hero && heroContent) {
//         heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
//     }
// });

// Add loading animation to project images: Adiciona um efeito de fade-in para as imagens dos projetos
document.addEventListener('DOMContentLoaded', () => {
    const projectImages = document.querySelectorAll('.project-image img');
    
    projectImages.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1'; // Torna a imagem visível quando carregada
        });
        
        // Define o estado inicial de carregamento (invisível)
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});


// Typing animation for hero title (optional enhancement): Animação de digitação para o título do Hero (opcional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = ''; // Limpa o conteúdo inicial
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i); // Adiciona um caractere por vez
            i++;
            setTimeout(type, speed); // Chama a função novamente após um atraso
        }
    }
    
    type();
}

// Initialize typing animation on page load (optional): Inicializa a animação de digitação ao carregar a página
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        // Descomente a linha abaixo para ativar a animação de digitação
        // typeWriter(heroTitle, originalText, 50);
    }
});

// Add hover effect to social links: Adiciona efeito de hover aos links sociais
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', (e) => {
        e.target.style.transform = 'translateX(10px)'; // Move o link para a direita
    });
    
    link.addEventListener('mouseleave', (e) => {
        e.target.style.transform = 'translateX(0)'; // Retorna o link à posição original
    });
});

// Smooth reveal animation for sections: Animação de revelação suave para títulos e divisores de seção
const revealElements = document.querySelectorAll('.section-title, .section-divider');
revealElements.forEach(el => {
    el.classList.add('fade-in'); // Adiciona a classe inicial para a animação
    observer.observe(el); // Observa o elemento
});

// Add active state to navigation based on current section: Adiciona estado 'active' aos links de navegação com base na seção atual
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    sections.forEach(section => {
        // Calcula a posição da seção na tela
        const sectionTop = section.offsetTop - 100; // Ajuste para o cabeçalho
        const sectionHeight = section.clientHeight;
        // Verifica se a seção atual está visível na viewport
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id'); // Obtém o ID da seção atual
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active'); // Remove a classe 'active' de todos os links
        // Se o href do link corresponde ao ID da seção atual, adiciona a classe 'active'
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add CSS for active navigation state: Adiciona CSS dinamicamente para o estado ativo da navegação
// Isso garante que o sublinhado e a cor do link ativo funcionem corretamente
const style = document.createElement('style');
style.textContent = `
    .nav-menu a.active {
        color: var(--primary-color); /* Cor do link ativo */
    }
    .nav-menu a.active::after {
        width: 100%; /* Sublinhado completo para o link ativo */
    }
`;
document.head.appendChild(style); // Adiciona a tag <style> ao <head> do documento
