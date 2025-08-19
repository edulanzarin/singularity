document.addEventListener('DOMContentLoaded', () => {
    // Elementos do DOM
    const items = document.querySelectorAll('.coverflow-item');
    const dotsContainer = document.getElementById('dots');
    const container = document.querySelector('.coverflow-container');
    const menuToggle = document.getElementById('menuToggle');
    const mainMenu = document.getElementById('mainMenu');
    const header = document.getElementById('header');
    const scrollToTopBtn = document.getElementById('scrollToTop');

    let currentIndex = 0;
    let isAnimating = false;

    // DADOS DOS PRODUTOS COM URLS
    const productData = [
        { url: "spoofer.html" },
        { url: "lol.html" },
        { url: "valorant.html" }
    ];

    // Funções de Navegação e Animação
    function updateCoverflow() {
        if (isAnimating) return;
        isAnimating = true;

        items.forEach((item, index) => {
            let offset = index - currentIndex;
            if (offset < -items.length / 2) offset += items.length;
            if (offset > items.length / 2) offset -= items.length;

            const absOffset = Math.abs(offset);
            const direction = Math.sign(offset);

            let translateX = offset * 50;
            let translateZ = -absOffset * 100;
            let rotateY = -direction * 50;
            let opacity = absOffset > 1 ? 0 : 1 - (absOffset * 0.2);
            let scale = 1 - (absOffset * 0.1);

            item.style.transform = `translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
            item.style.opacity = opacity;
            item.style.zIndex = items.length - absOffset;
            item.classList.toggle('active', index === currentIndex);
        });

        dots.forEach((dot, index) => dot.classList.toggle('active', index === currentIndex));
        setTimeout(() => { isAnimating = false; }, 600);
    }

    window.navigate = (direction) => {
        if (isAnimating) return;
        currentIndex = (currentIndex + direction + items.length) % items.length;
        updateCoverflow();
    };

    const goToIndex = (index) => {
        if (isAnimating || index === currentIndex) return;
        currentIndex = index;
        updateCoverflow();
    };

    // Criar os "dots" de navegação
    items.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.onclick = () => goToIndex(index);
        dotsContainer.appendChild(dot);
    });
    const dots = document.querySelectorAll('.dot');

    // Event Listeners
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mainMenu.classList.toggle('active');
    });

    document.querySelectorAll('.menu-item:not(.external)').forEach(item => {
        item.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mainMenu.classList.remove('active');
        });
    });

    // LÓGICA DE CLIQUE
    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (index === currentIndex) {
                window.location.href = productData[index].url;
            } else {
                goToIndex(index);
            }
        });
    });

    container.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') navigate(-1);
        if (e.key === 'ArrowRight') navigate(1);
    });

    // Scroll e Menu Ativo
    const sections = document.querySelectorAll('.section');
    const menuItems = document.querySelectorAll('.menu-item');

    const updateActiveState = () => {
        const scrollPosition = window.scrollY + header.offsetHeight;
        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                menuItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${section.id}`) {
                        item.classList.add('active');
                    }
                });
            }
        });

        header.classList.toggle('scrolled', window.scrollY > 50);
        scrollToTopBtn.classList.toggle('visible', window.scrollY > 500);
    };

    window.addEventListener('scroll', updateActiveState);

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Inicialização
    updateCoverflow();
});