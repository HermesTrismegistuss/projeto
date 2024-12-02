const sections = document.querySelectorAll('.section');

function checkPosition() {
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Verifica se a seção está visível no viewport
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.classList.add('visible');
        }
    });
}

// Verifica as posições ao carregar a página
checkPosition();

// Adiciona o evento de scroll para monitorar a posição
window.addEventListener('scroll', checkPosition);
