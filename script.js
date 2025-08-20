document.addEventListener('DOMContentLoaded', () => {

    // --- ELEMENTOS DO DOM ---
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menuToggle');
    const mainMenu = document.getElementById('mainMenu');
    const scrollToTopBtn = document.getElementById('scrollToTop');
    const sections = document.querySelectorAll('.section');
    const menuItems = document.querySelectorAll('.main-menu a');

    // --- LÓGICA DO CABEÇALHO ---
    // Efeito de 'scrolled' no cabeçalho
    const handleHeaderScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    // Abrir/Fechar menu mobile
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mainMenu.classList.toggle('active');
    });

    // Fechar menu mobile ao clicar em um item
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            if (mainMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                mainMenu.classList.remove('active');
            }
        });
    });

    // --- LÓGICA DO SCROLL ---
    const handleScroll = () => {
        // Mostra/Esconde o botão "Voltar ao Topo"
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }

        // Atualiza o item de menu ativo
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - header.offsetHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        menuItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(currentSection)) {
                item.classList.add('active');
            }
        });

        // Chama a função do header também
        handleHeaderScroll();
    };

    // Event listener para o scroll geral
    window.addEventListener('scroll', handleScroll);

    // Event listener para o clique no botão "Voltar ao Topo"
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});