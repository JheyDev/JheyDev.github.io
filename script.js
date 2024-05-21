// Seleciona todas as imagens do projeto
const projectImages = document.querySelectorAll('.project-image');

// Seleciona o elemento de sobreposição de fundo
const backgroundOverlay = document.querySelector('.background-overlay');

// Adiciona um evento de clique a cada imagem
projectImages.forEach(image => {
    image.addEventListener('click', () => {
        // Se a imagem estiver expandida, remove a classe 'expanded' e oculta o overlay
        if (image.classList.contains('expanded')) {
            image.classList.remove('expanded');
            backgroundOverlay.style.display = 'none';
            document.body.classList.remove('expanded'); // Remove a classe 'expanded' do corpo
        } else {
            // Se a imagem não estiver expandida, expande-a, exibe o overlay e aplica o desfoque ao fundo
            image.classList.add('expanded');
            backgroundOverlay.style.display = 'block';
            document.body.classList.add('expanded'); // Adiciona a classe 'expanded' ao corpo
        }
    });
});

// Adiciona um evento de clique ao overlay de fundo
backgroundOverlay.addEventListener('click', () => {
    // Oculta o overlay de fundo e remove a expansão da imagem
    backgroundOverlay.style.display = 'none';
    projectImages.forEach(image => {
        image.classList.remove('expanded');
    });
    document.body.classList.remove('expanded'); // Remove a classe 'expanded' do corpo
});
