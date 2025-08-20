document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DO HERO CARROSSEL ---
    const track = document.querySelector('.hero-track');
    if (track) {
        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.hero-nav.next');
        const prevButton = document.querySelector('.hero-nav.prev');
        const dotsNav = document.querySelector('.hero-dots');
        const slideWidth = slides[0].getBoundingClientRect().width;
        let currentIndex = 0;
        let autoplayInterval;

        // Criar os pontos de navegação
        slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.classList.add('hero-dot');
            dot.addEventListener('click', () => {
                moveToSlide(index);
                resetAutoplay();
            });
            dotsNav.appendChild(dot);
        });

        const dots = Array.from(dotsNav.children);

        // Função para mover para um slide específico
        const moveToSlide = (index) => {
            track.style.transform = `translateX(-${slideWidth * index}px)`;

            // Atualiza a classe 'active' no slide
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');

            // Atualiza a classe 'active' no ponto
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');

            currentIndex = index;
        };

        // Funções de navegação
        const showNextSlide = () => {
            const nextIndex = (currentIndex + 1) % slides.length;
            moveToSlide(nextIndex);
        };

        const showPrevSlide = () => {
            const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
            moveToSlide(prevIndex);
        };

        // Autoplay
        const startAutoplay = () => {
            autoplayInterval = setInterval(showNextSlide, 7000); // Muda a cada 7 segundos
        };

        const resetAutoplay = () => {
            clearInterval(autoplayInterval);
            startAutoplay();
        };

        // Adicionar eventos aos botões
        nextButton.addEventListener('click', () => {
            showNextSlide();
            resetAutoplay();
        });

        prevButton.addEventListener('click', () => {
            showPrevSlide();
            resetAutoplay();
        });

        // Pausar autoplay com o mouse
        track.parentElement.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
        track.parentElement.addEventListener('mouseleave', () => startAutoplay());

        // Iniciar tudo
        moveToSlide(0);
        startAutoplay();
    }


    // --- LÓGICA DO CABEÇALHO E OUTROS ELEMENTOS ---
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menuToggle');
    const mainMenu = document.getElementById('mainMenu');
    const scrollToTopBtn = document.getElementById('scrollToTop');
    const sections = document.querySelectorAll('.section:not(#home)'); // Exclui a seção home da lógica de menu ativo por scroll
    const menuItems = document.querySelectorAll('.main-menu a');

    const handleHeaderScroll = () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    };

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mainMenu.classList.toggle('active');
    });

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            if (mainMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                mainMenu.classList.remove('active');
            }
        });
    });

    const handleScroll = () => {
        scrollToTopBtn.classList.toggle('visible', window.scrollY > 300);
        handleHeaderScroll();

        let currentSectionId = 'home'; // Padrão
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - header.offsetHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        menuItems.forEach(item => {
            item.classList.toggle('active', item.getAttribute('href').includes(currentSectionId));
        });
    };

    window.addEventListener('scroll', handleScroll);

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});