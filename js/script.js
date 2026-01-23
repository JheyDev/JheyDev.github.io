// ============================================
// DATA CONFIGURATION
// ============================================

const techProjects = [
    {
        title: "Dashboard Analytics Pro",
        image: "/images/tech-dashboard.jpg",
        description: "Painel de métricas em tempo real com visualizações interativas",
        category: "dashboards",
        tags: ["React", "Chart.js", "API"],
    },
    {
        title: "FlowBot Automação",
        image: "/images/tech-automation.jpg",
        description: "Sistema de automação de workflows para e-commerce",
        category: "automacao",
        tags: ["Node.js", "Zapier", "Webhooks"],
    },
    {
        title: "ShadowAI Assistant",
        image: "/images/tech-ai-bot.jpg",
        description: "Chatbot inteligente com personalidade gótica customizada",
        category: "ia",
        tags: ["OpenAI", "LangChain", "Next.js"],
    },
    {
        title: "Portfolio Dark Mode",
        image: "/images/tech-website.jpg",
        description: "Template de portfolio com estética cyberpunk",
        category: "websites",
        tags: ["Next.js", "Tailwind", "Framer Motion"],
    },
    {
        title: "E-commerce Dashboard",
        image: "/images/tech-ecommerce.jpg",
        description: "Dashboard completo para gestão de lojas online",
        category: "dashboards",
        tags: ["Vue.js", "Vuetify", "REST API"],
    },
    {
        title: "Social Media Manager",
        image: "/images/tech-social.jpg",
        description: "Ferramenta de automação para redes sociais",
        category: "automacao",
        tags: ["Python", "Selenium", "MySQL"],
    },
    {
        title: "Computer Vision API",
        image: "/images/tech-vision.jpg",
        description: "API de visão computacional para análise de imagens",
        category: "ia",
        tags: ["TensorFlow", "Python", "FastAPI"],
    },
    {
        title: "Landing Page Generator",
        image: "/images/tech-landing.jpg",
        description: "Gerador de landing pages com IA",
        category: "websites",
        tags: ["React", "Next.js", "OpenAI"],
    },
];

const artProjects = [
    {
        title: "Neon Dreams",
        image: "/images/art-neon-dreams.jpg",
        description: "Série de arte digital com estética cyberpunk",
        category: "digital",
        tags: ["Procreate", "Digital Painting"],
    },
    {
        title: "Code as Art",
        image: "/images/art-code.jpg",
        description: "Visualizações poéticas de código de programação",
        category: "conceitual",
        tags: ["Processing", "Generative Art"],
    },
    {
        title: "Digital Shadows",
        image: "/images/art-shadows.jpg",
        description: "Exploração de luz e sombra em ambiente digital",
        category: "experimental",
        tags: ["3D Blender", "VFX"],
    },
    {
        title: "Glitch Reality",
        image: "/images/art-glitch.jpg",
        description: "Série de arte digital com efeitos de glitch",
        category: "digital",
        tags: ["Photoshop", "Aftereffects"],
    },
    {
        title: "Algorithm Genesis",
        image: "/images/art-algorithm.jpg",
        description: "Arte gerada por algoritmos de inteligência artificial",
        category: "conceitual",
        tags: ["Python", "GANs"],
    },
    {
        title: "Void Wanderer",
        image: "/images/art-void.jpg",
        description: "Personagem digital em universo vazio e minimalista",
        category: "experimental",
        tags: ["3D Modeling", "Octane Render"],
    },
];

const toolsData = [
    { name: "React", icon: "⚛️" },
    { name: "JavaScript", icon: "🟨" },
    { name: "TypeScript", icon: "📘" },
    { name: "Next.js", icon: "▲" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "CSS/SCSS", icon: "🎨" },
    { name: "Tailwind", icon: "🌊" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Docker", icon: "🐳" },
    { name: "Git", icon: "🔧" },
    { name: "OpenAI", icon: "🤖" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "Figma", icon: "🎭" },
    { name: "Blender", icon: "🔵" },
];

const socialLinksData = [
    {
        label: "LinkedIn",
        href: "#",
        description: "Conecte-se profissionalmente",
        color: "#0077B5",
    },
    {
        label: "GitHub",
        href: "#",
        description: "Veja meus repositórios",
        color: "#fff",
    },
    {
        label: "Email",
        href: "mailto:contato@jheytech.ai",
        description: "contato@jheytech.ai",
        color: "#EA4335",
    },
    {
        label: "WhatsApp",
        href: "#",
        description: "Mensagem direta",
        color: "#25D366",
    },
];

// ============================================
// CUSTOM CURSOR
// ============================================

class CustomCursor {
    constructor() {
        this.cursor = document.getElementById('custom-cursor');
        this.position = { x: 0, y: 0 };
        this.isVisible = false;
        this.init();
    }

    init() {
        document.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        document.addEventListener('mouseleave', () => this.handleMouseLeave());
        document.addEventListener('mouseenter', () => this.handleMouseEnter());
    }

    handleMouseMove(e) {
        this.position = { x: e.clientX, y: e.clientY };
        this.cursor.style.left = `${this.position.x}px`;
        this.cursor.style.top = `${this.position.y}px`;
        if (!this.isVisible) {
            this.cursor.classList.add('visible');
            this.isVisible = true;
        }
    }

    handleMouseLeave() {
        this.cursor.classList.remove('visible');
        this.isVisible = false;
    }

    handleMouseEnter() {
        this.cursor.classList.add('visible');
        this.isVisible = true;
    }
}

// ============================================
// STICKY NAVBAR
// ============================================

class StickyNavbar {
    constructor() {
        this.navbar = document.getElementById('sticky-navbar');
        this.scrollThreshold = 100;
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
        if (window.scrollY > this.scrollThreshold) {
            this.navbar.classList.add('visible');
        } else {
            this.navbar.classList.remove('visible');
        }
    }
}

// ============================================
// GLITCH LOGO
// ============================================

class GlitchLogo {
    constructor() {
        this.logo = document.querySelector('.glitch-logo');
        this.init();
    }

    init() {
        setInterval(() => {
            if (Math.random() > 0.7) {
                this.logo.classList.add('glitch');
                setTimeout(() => {
                    this.logo.classList.remove('glitch');
                }, 300);
            }
        }, 3000);
    }
}

// ============================================
// PROJECTS GRID
// ============================================

class ProjectsGrid {
    constructor() {
        this.tabButtons = document.querySelectorAll('.tab-button');
        this.projectViews = document.querySelectorAll('.projects-view');
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.init();
    }

    init() {
        this.initTabs();
        this.renderProjects();
        this.initFilters();
    }

    initTabs() {
        this.tabButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleTabClick(e));
        });
    }

    handleTabClick(e) {
        const section = e.target.dataset.section;
        
        // Update active tab button
        this.tabButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        // Update active project view
        this.projectViews.forEach(view => view.classList.remove('active'));
        document.getElementById(`${section}-section`).classList.add('active');

        // Reset filters
        this.resetFilters();
    }

    renderProjects() {
        const techGrid = document.getElementById('tech-projects-grid');
        const artGrid = document.getElementById('art-projects-grid');

        techProjects.forEach(project => {
            techGrid.appendChild(this.createProjectCard(project));
        });

        artProjects.forEach(project => {
            artGrid.appendChild(this.createProjectCard(project));
        });
    }

    createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.dataset.category = project.category;
        card.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%231a1a1a%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23737373%22%3EImage Not Available%3C/text%3E%3C/svg%3E'">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        return card;
    }

    initFilters() {
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleFilter(e));
        });
    }

    handleFilter(e) {
        const filter = e.target.dataset.filter;
        const activeView = document.querySelector('.projects-view.active');
        const cards = activeView.querySelectorAll('.project-card');

        // Update active filter button
        activeView.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        // Filter cards
        cards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    resetFilters() {
        this.filterBtns.forEach(btn => {
            if (btn.dataset.filter === 'all') {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        const activeView = document.querySelector('.projects-view.active');
        const cards = activeView.querySelectorAll('.project-card');
        cards.forEach(card => card.style.display = 'block');
    }
}

// ============================================
// TOOLS SECTION
// ============================================

class ToolsSection {
    constructor() {
        this.toolsGrid = document.getElementById('tools-grid');
        this.init();
    }

    init() {
        this.renderTools();
    }

    renderTools() {
        toolsData.forEach(tool => {
            const toolCard = document.createElement('div');
            toolCard.className = 'tool-card';
            toolCard.innerHTML = `
                <div class="tool-icon">${tool.icon}</div>
                <div class="tool-name">${tool.name}</div>
            `;
            this.toolsGrid.appendChild(toolCard);
        });
    }
}

// ============================================
// CONTACT FORM
// ============================================

class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.renderSocialLinks();
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
        };

        console.log('Form submitted:', formData);
        
        // Reset form
        this.form.reset();
        
        // Show success message (optional)
        alert('Mensagem enviada com sucesso! Obrigado por entrar em contato.');
    }

    renderSocialLinks() {
        const socialGrid = document.getElementById('social-links-grid');
        
        socialLinksData.forEach(social => {
            const link = document.createElement('a');
            link.href = social.href;
            link.className = 'social-link';
            link.innerHTML = `
                <div class="social-link-icon" style="color: ${social.color}">
                    ${this.getIconSvg(social.label)}
                </div>
                <div class="social-link-info">
                    <span class="social-link-title">${social.label}</span>
                    <span class="social-link-desc">${social.description}</span>
                </div>
            `;
            socialGrid.appendChild(link);
        });
    }

    getIconSvg(label) {
        const icons = {
            LinkedIn: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>',
            GitHub: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
            Email: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>',
            WhatsApp: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.209-3.997 6.26-2.09 9.647 1.905 3.388 5.814 4.574 9.207 2.769h.004c3.314-1.751 4.638-5.74 2.927-9.05 1.675-2.81.139-6.231-3.013-7.744zm0 0"/></svg>',
        };
        return icons[label] || '';
    }
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    new CustomCursor();
    new StickyNavbar();
    new GlitchLogo();
    new ProjectsGrid();
    new ToolsSection();
    new ContactForm();
});
