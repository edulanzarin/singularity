// assets/js/utils.js - Lógicas globais para todas as páginas

document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA DO CABEÇALHO E MENU MOBILE ---
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menuToggle');
    const mainMenu = document.getElementById('mainMenu');
    const menuItems = document.querySelectorAll('.main-menu a');

    // Adiciona/remove a classe 'scrolled' do cabeçalho ao rolar a página
    const handleHeaderScroll = () => {
        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 50);
        }
    };

    // Abre e fecha o menu mobile
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            mainMenu.classList.toggle('active');
        });
    }

    // Fecha o menu mobile ao clicar em um item
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            if (mainMenu && mainMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                mainMenu.classList.remove('active');
            }
        });
    });


    // --- LÓGICA DO BOTÃO 'VOLTAR AO TOPO' ---
    const scrollToTopBtn = document.getElementById('scrollToTop');

    if (scrollToTopBtn) {
        // Mostra ou esconde o botão ao rolar
        const handleScrollToTopVisibility = () => {
            scrollToTopBtn.classList.toggle('visible', window.scrollY > 300);
        };

        // Evento de clique para rolar para o topo
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Adiciona um único ouvinte de scroll para todas as funções de scroll
        window.addEventListener('scroll', () => {
            handleHeaderScroll();
            handleScrollToTopVisibility();
        });
    } else {
        // Se não houver botão, apenas o header precisa do scroll
        window.addEventListener('scroll', handleHeaderScroll);
    }
});