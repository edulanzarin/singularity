// Substitua a lógica do carrossel 3D por esta no seu assets/js/index.js

// --- LÓGICA DO SLIDER DE DEPOIMENTOS ---
const slider = document.querySelector('.testimonial-slider');
if (slider) {
    const cards = slider.querySelectorAll('.testimonial-card');
    const prevBtn = document.getElementById('testimonialPrev');
    const nextBtn = document.getElementById('testimonialNext');
    const dotsContainer = document.getElementById('testimonialDots');
    let currentIndex = 0;
    let autoplayInterval;

    // Cria os pontos de navegação
    cards.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetAutoplay();
        });
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.dot');

    function goToSlide(index) {
        // Move o trilho de slides
        slider.style.transform = `translateX(-${index * 100}%)`;

        // Atualiza o ponto ativo
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');

        currentIndex = index;
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % cards.length;
        goToSlide(currentIndex);
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        goToSlide(currentIndex);
    }

    // Autoplay
    function startAutoplay() {
        autoplayInterval = setInterval(showNext, 7000); // Muda a cada 7 segundos
    }

    function resetAutoplay() {
        clearInterval(autoplayInterval);
        startAutoplay();
    }

    // Eventos dos botões
    nextBtn.addEventListener('click', () => {
        showNext();
        resetAutoplay();
    });

    prevBtn.addEventListener('click', () => {
        showPrev();
        resetAutoplay();
    });

    // Inicia o slider
    goToSlide(0);
    startAutoplay();
}