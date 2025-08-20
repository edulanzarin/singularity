document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA DO MENU ATIVO NA ROLAGEM ---
    const sections = document.querySelectorAll('.section:not(#home)');
    const menuItems = document.querySelectorAll('.main-menu a');
    const header = document.getElementById('header'); // Precisa do header para o cálculo de offset

    const handleActiveMenuOnScroll = () => {
        let currentSectionId = 'home';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - header.offsetHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        menuItems.forEach(item => {
            // Verifica se o href do item contém o ID da seção atual
            // Adiciona a verificação 'item.getAttribute('href')' para evitar erros
            const href = item.getAttribute('href');
            if (href) {
                item.classList.toggle('active', href.includes(currentSectionId));
            }
        });
    };

    // Adiciona um listener de scroll apenas para esta funcionalidade da página inicial
    window.addEventListener('scroll', handleActiveMenuOnScroll);
});