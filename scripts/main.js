document.addEventListener('DOMContentLoaded', () => {
    // --------------------------------------------------------------------------
    // SELEÇÃO DE ELEMENTOS DOM
    // --------------------------------------------------------------------------

    const startBtn = document.getElementById("btn-start");
    const codeEffectContainer = document.getElementById("code-effect-container");
    const codeEffect = document.getElementById("code-effect");
    const terminalPrompt = document.getElementById("terminal-prompt");
    const accessGrantedLarge = document.getElementById("access-granted-large");
    const homePage = document.getElementById("home-page");
    const portfolioPage = document.getElementById("portfolio-page");
    const mainNav = document.querySelector('.main-nav');
    const logoContainer = document.querySelector('.logo-container');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const navLinksElements = document.querySelectorAll('.nav-links li a');
    const socialIcons = document.querySelector('.social-icons');

    const clickSound = document.getElementById("mechanical-sound");
    const openSound = document.getElementById("window-open-sound");
    const typingSound = document.getElementById("typing-sound");

    const projectsSection = document.getElementById('projects-section');
    const projectsGrid = document.querySelector('.projects-grid');
    const expertiseButtons = document.querySelectorAll('#home-expertise .expertise-button');
    const filterButtons = document.querySelectorAll('#filter-nav .parent-button');
    const loadMoreButton = document.getElementById('load-more-projects');

    // Variável para controlar o estado de visibilidade da seção de projetos
    let projectsVisible = false;
    let currentFilter = 'all'; // Para rastrear o filtro ativo, padrão para 'all'
    const initialLoadCount = 4; // Número de projetos a carregar inicialmente
    let allProjects = Array.from(document.querySelectorAll('.project-item')); // Converte a NodeList para Array
    let visibleProjectsCount = 0;

    // --------------------------------------------------------------------------
    // FUNÇÕES GERAIS (MANTENHA AS EXISTENTES)
    // --------------------------------------------------------------------------
    function typeWriter(element, text, speed, callback) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else if (callback) {
                callback();
            }
        }
        type();
    }

    function processMessage() {
        const messages = [
            "Iniciando processo...",
            "Compilando...",
            "Carregando portfólio..."
        ];
        const okText = " <acesso ok>";
        const typingSpeed = 40;
        const delayAfterMessage = 350;
        const delayAfterOk = 300;
        let currentMessageIndex = 0;

        function nextMessage() {
            if (currentMessageIndex < messages.length) {
                const message = messages[currentMessageIndex];
                codeEffect.innerHTML = "";
                typeWriter(codeEffect, message, typingSpeed, () => {
                    setTimeout(() => {
                        const okSpan = document.createElement("span");
                        okSpan.style.color = "#EC720F";
                        codeEffect.appendChild(okSpan);
                        typeWriter(okSpan, okText, typingSpeed, () => {
                            setTimeout(() => {
                                currentMessageIndex++;
                                nextMessage();
                            }, delayAfterOk);
                        });
                    }, delayAfterMessage);
                });
            } else {
                typingSound.pause();
                typingSound.currentTime = 0;
                codeEffectContainer.style.display = "none";
                accessGrantedLarge.style.display = "block";
                if (openSound) {
                    openSound.currentTime = 0;
                    openSound.play();
                } else {
                    console.error("Elemento de áudio 'openSound' não encontrado.");
                }
                setTimeout(() => {
                    homePage.style.display = "none";
                    portfolioPage.style.display = "block";
                }, 1200);
            }
        }
        nextMessage();
    }

    function displayProjects(projectsToShow) {
        projectsToShow.forEach(project => {
            projectsGrid.appendChild(project);
            project.style.display = 'block'; // Garante que os projetos estejam visíveis
        });
    }

    function filterAndLoadProjects(category, loadCount) {
        projectsGrid.innerHTML = ''; // Limpa a grid
        visibleProjectsCount = 0;
        currentFilter = category;

        const filteredProjects = allProjects.filter(item =>
            category === 'all' || item.dataset.category.split(' ').includes(category)
        );

        const projectsToLoad = filteredProjects.slice(0, loadCount);
        displayProjects(projectsToLoad);
        visibleProjectsCount = projectsToLoad.length;

        // Controla a visibilidade do botão "Ver Mais"
        if (visibleProjectsCount < filteredProjects.length) {
            loadMoreButton.style.display = 'block';
        } else {
            loadMoreButton.style.display = 'none';
        }

        // Atualiza a classe 'active' nos botões de filtro
        filterButtons.forEach(btn => btn.classList.remove('active'));
        filterButtons.forEach(btn => {
            if (btn.dataset.filter === category) {
                btn.classList.add('active');
            } else if (category === 'all' && btn.dataset.filter === 'all') {
                btn.classList.add('active');
            }
        });
    }
    
    function toggleProjects(filter) {
        if (projectsVisible && filter === currentFilter) {
            projectsSection.style.display = 'none';
            projectsVisible = false;
            currentFilter = 'none';
            filterButtons.forEach(btn => btn.classList.remove('active'));
            expertiseButtons.forEach(btn => btn.classList.remove('active'));
        } else {
            projectsSection.style.display = 'block';
            filterAndLoadProjects(filter, initialLoadCount);
            projectsVisible = true;
            updateFilterButtonActiveClass(filter);
            expertiseButtons.forEach(btn => btn.classList.remove('active'));
            expertiseButtons.forEach(btn => {
                if (btn.dataset.filter === filter) {
                    btn.classList.add('active');
                }
            });
        }
    }

    function handleExpertiseClick(event) {
        const filter = event.target.dataset.filter;
        toggleProjects(filter);
    }

    function handleFilterClick(event) {
        const filter = event.target.dataset.filter;
        toggleProjects(filter);
    }

    // Event listener para o botão "Ver Mais"
    loadMoreButton.addEventListener('click', () => {
        const filteredProjects = allProjects.filter(item =>
            currentFilter === 'all' || item.dataset.category.split(' ').includes(currentFilter)
        );
        const nextProjects = filteredProjects.slice(visibleProjectsCount, visibleProjectsCount + initialLoadCount);
        displayProjects(nextProjects);
        visibleProjectsCount += nextProjects.length;

        // Oculta o botão "Ver Mais" se todos os projetos filtrados foram exibidos
        if (visibleProjectsCount >= filteredProjects.length) {
            loadMoreButton.style.display = 'none';
        }
    });

    // --------------------------------------------------------------------------
    // EVENT LISTENERS (MANTENHA OS EXISTENTES)
    // --------------------------------------------------------------------------
    startBtn.addEventListener("click", () => {
        clickSound.currentTime = 0;
        clickSound.play();
        startBtn.style.display = "none";
        codeEffect.innerHTML = "";
        codeEffectContainer.style.display = "flex";
        terminalPrompt.textContent = "";
        accessGrantedLarge.style.display = "none";
        typingSound.currentTime = 0;
        typingSound.play();
        processMessage();
    });
    expertiseButtons.forEach(button => {
        button.addEventListener('click', handleExpertiseClick);
    });
    filterButtons.forEach(button => {
        button.addEventListener('click', handleFilterClick);
    });
    navLinksElements.forEach(link => {
        link.addEventListener('click', function(event) {
            this.classList.add('nav-link-clicked');
            setTimeout(() => {
                this.classList.remove('nav-link-clicked');
            }, 300);
        });
    });

    // Garante que a seção de projetos esteja inicialmente oculta e "Todos" ativo, carregando os primeiros projetos
    window.addEventListener('load', () => {
        projectsSection.style.display = 'none';
        filterButtons.forEach(btn => btn.classList.remove('active'));
        updateFilterButtonActiveClass('all');
        // Exibe a seção de projetos com os primeiros itens de "Todos" ao carregar a página
        toggleProjects('all');
        projectsSection.style.display = 'none'; // Oculta novamente para esperar um clique
    });

    // --------------------------------------------------------------------------
    // ATUALIZAÇÕES DO MENU (MANTENHA OS EXISTENTES)
    // --------------------------------------------------------------------------
    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburgerMenu.classList.toggle('open');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburgerMenu.classList.remove('open');
            });
        });
    }

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const threshold = 50; // Ponto inicial da transição
        const solidThreshold = 200; // Ponto em que o background se torna sólido (ajuste conforme necessário)
        const maxOpacity = 0.8;
        const minOpacity = 0.1;
        const maxPadding = '15px 20px';
        const minPadding = '5px 10px';
        const scaleFactor = Math.max(0.8, 1 - scrollPosition / 300);

        if (scrollPosition > threshold) {
            const opacity = Math.max(minOpacity, maxOpacity - (scrollPosition - threshold) / 200);
            mainNav.style.backgroundColor = `rgba(29, 31, 28, ${opacity})`; // Cor #1D1F1C com opacidade
            mainNav.style.padding = minPadding;
            mainNav.style.borderBottom = 'none';
            if (logoContainer) logoContainer.style.transform = `scale(${scaleFactor})`;
            if (navLinks && window.innerWidth > 768) navLinks.style.transform = `scale(${scaleFactor})`; // Aplica scale apenas em desktop
            if (socialIcons && window.innerWidth > 768) socialIcons.style.transform = `scale(${scaleFactor})`; // Aplica scale apenas em desktop

            // Adiciona background sólido quando o scroll passa do 'solidThreshold'
            if (scrollPosition > solidThreshold) {
                mainNav.style.backgroundColor = '#1D1F1C'; // Cor sólida
            }
        } else {
            mainNav.style.backgroundColor = `rgba(29, 31, 28, ${maxOpacity})`; // Cor original com opacidade máxima
            mainNav.style.padding = maxPadding;
            mainNav.style.borderBottom = '1px solid #333';
            if (logoContainer) logoContainer.style.transform = 'scale(1)';
            if (navLinks && window.innerWidth > 768) navLinks.style.transform = 'scale(1)'; // Aplica scale apenas em desktop
            if (socialIcons && window.innerWidth > 768) socialIcons.style.transform = 'scale(1)'; // Aplica scale apenas em desktop
        }
    });
});