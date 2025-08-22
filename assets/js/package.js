document.addEventListener('DOMContentLoaded', () => {
    // Banco de dados simulado com informações dos produtos
    const productData = {
        // --- PRODUTOS SPOOFER ---
        'vanguard-spoofer': {
            title: 'Vanguard Spoofer',
            description: 'O Spoofer definitivo para o Riot Vanguard. Desenvolvido para um bypass completo e indetectável, ele garante que você volte a jogar LoL e outros jogos da Riot sem preocupações com banimentos de HWID. Segurança, estabilidade e desempenho em primeiro lugar.',
            image: 'assets/images/vanguard-spoofer.jpg',
            prices: {
                lifetime: '70.00'
            },
            category: { name: 'Spoofer', link: 'spoofer.html' }
        },
        'biosecure-spoofer': {
            title: 'BioSecure Spoofer',
            description: 'Um dos mais poderosos e versáteis do mercado. O BioSecure oferece uma solução robusta para banimentos de HWID em vários jogos, com um sistema de mascaramento de alto nível que garante sua proteção. Ideal para quem busca a máxima segurança e compatibilidade.',
            image: 'assets/images/biosecure-spoofer.png',
            prices: {
                lifetime: '100.00'
            },
            category: { name: 'Spoofer', link: 'spoofer.html' }
        },
        'portable-spoofer': {
            title: 'Portable Spoofer',
            description: 'A solução mais prática e rápida para reverter banimentos de HWID. O Portable Spoofer não requer instalação, sendo perfeito para uso em computadores múltiplos ou para quem precisa de uma ferramenta ágil. Bypass eficiente em poucos segundos.',
            image: 'assets/images/portable-spoofer.jpg',
            prices: {
                lifetime: '90.00'
            },
            category: { name: 'Spoofer', link: 'spoofer.html' }
        },

        // --- PRODUTOS DE LEAGUE OF LEGENDS ---
        'quartzo-script-lol': {
            title: 'Quartzo Script',
            description: 'Eleve seu jogo com o Quartzo Script, uma ferramenta de alto nível para League of Legends. Desenvolvido para oferecer uma vantagem competitiva, este script completo é o seu parceiro ideal para dominar a Summoner\'s Rift, garantindo uma experiência de jogo superior e segura.',
            image: 'assets/images/quartzo-script-lol.png',
            prices: {
                lifetime: '80.00'
            },
            category: { name: 'League of Legends', link: 'lol.html' }
        },

        // --- PRODUTOS DE VALORANT ---
        'orbitex-cheat-valorant': {
            title: 'Orbitex Cheat',
            description: 'O Orbitex Cheat é a introdução perfeita ao mundo competitivo de Valorant. Com um conjunto de recursos essenciais e fáceis de usar, ele oferece a vantagem que você precisa para subir de elo. É a ferramenta ideal para iniciantes que buscam uma experiência de jogo aprimorada e segura.',
            image: 'assets/images/orbitex-cheat-valorant.jpg',
            prices: {
                lifetime: '60.00'
            },
            category: { name: 'Valorant', link: 'valorant.html' }
        },
        'maxi-cheat-valorant': {
            title: 'Maxi Cheat',
            description: 'Um equilíbrio perfeito entre performance e funcionalidade. O Maxi Cheat oferece um pacote de recursos intermediários para jogadores que já conhecem o básico e querem elevar seu nível. Com mais opções de personalização e otimização, ele é projetado para quem busca um desempenho sólido e confiável em qualquer partida.',
            image: 'assets/images/maxi-cheat-valorant.jpg',
            prices: {
                lifetime: '80.00'
            },
            category: { name: 'Valorant', link: 'valorant.html' }
        },
        'covert-cheat-valorant': {
            title: 'Covert Valorant',
            description: 'O auge da tecnologia em cheats para Valorant. O Covert é uma solução premium para jogadores que exigem o melhor em segurança e recursos avançados. Seu sistema altamente sofisticado oferece um desempenho inigualável, sendo a escolha de profissionais que buscam total discrição e a máxima vantagem competitiva.',
            image: 'assets/images/covert-cheat-valorant.jpg',
            prices: {
                lifetime: '90.00'
            },
            category: { name: 'Valorant', link: 'valorant.html' }
        },

        // --- PRODUTOS DE FORTNITE ---
        'external-cheat-fortnite': {
            title: 'External Cheat Fortnite',
            description: 'Domine a ilha com o External Cheat para Fortnite. Nossa ferramenta oferece uma vantagem competitiva inigualável, projetada para aprimorar sua mira, consciência de jogo e performance geral, garantindo que você esteja sempre à frente dos seus adversários e pronto para a vitória.',
            image: 'assets/images/external-cheat-fortnite.jpg',
            prices: {
                lifetime: '80.00'
            },
            category: { name: 'Fortnite', link: 'fortnite.html' }
        },

        // --- PRODUTOS DE OVERWATCH ---
        'sinfulexp-cheat-overwatch': {
            title: 'SinfulEXP Overwatch',
            description: 'Transforme sua experiência em Overwatch com o SinfulEXP. Este cheat foi feito para te dar a vantagem decisiva em combate, melhorando seu posicionamento, mira e tomada de decisões em equipe. Eleve sua performance e alcance o topo do placar de forma discreta e segura.',
            image: 'assets/images/sinfulexp-cheat-overwatch.jpg',
            prices: {
                lifetime: '80.00'
            },
            category: { name: 'Overwatch', link: 'overwatch.html' }
        },
    };

    // Mapeamento de chaves para texto legível
    const planLabels = {
        weekly: '1 Semana',
        monthly: '1 Mês',
        lifetime: 'Permanente'
    };

    const params = new URLSearchParams(window.location.search);
    const productId = params.get('product');
    const product = productData[productId];

    if (product) {
        document.title = `${product.title} - Quartzo`;
    }

    if (product) {
        // Atualiza o Breadcrumb dinamicamente
        const breadcrumbContainer = document.getElementById('breadcrumbContainer');
        if (breadcrumbContainer && product.category) {
            breadcrumbContainer.innerHTML = `
            <a href="index.html#products">Produtos</a>
            <span>&gt;</span>
            <a href="${product.category.link}">${product.category.name}</a>
            <span>&gt;</span>
            <h1>${product.title}</h1>
        `;
        }

        // Atualiza os dados fixos do produto (código que você já tem)
        document.getElementById('productImage').src = product.image;
        document.getElementById('productTitle').textContent = product.title;
        document.getElementById('productDescription').textContent = product.description;

        const priceElement = document.getElementById('productPrice');
        const planOptionsContainer = document.getElementById('planOptionsContainer');

        // Limpa quaisquer opções que possam estar no HTML
        planOptionsContainer.innerHTML = '';

        // === A MÁGICA ACONTECE AQUI ===
        // Cria dinamicamente as opções de plano baseadas nos preços do produto
        Object.keys(product.prices).forEach((planKey, index) => {
            const isChecked = index === 0 ? 'checked' : ''; // Marca o primeiro como padrão
            const labelText = planLabels[planKey] || planKey; // Usa o texto legível ou a chave

            const optionHTML = `
                <label>
                    <input type="radio" name="plan" value="${planKey}" ${isChecked}>
                    <span>${labelText}</span>
                </label>
            `;
            planOptionsContainer.insertAdjacentHTML('beforeend', optionHTML);
        });

        // Agora que as opções foram criadas, podemos selecioná-las
        const planOptions = document.querySelectorAll('input[name="plan"]');

        // Função para atualizar o preço na tela
        function updatePrice() {
            // Adicionamos uma verificação para o caso de haver apenas uma opção
            const selectedPlanInput = document.querySelector('input[name="plan"]:checked');
            if (selectedPlanInput) {
                const selectedPlanValue = selectedPlanInput.value;
                const newPrice = product.prices[selectedPlanValue];
                priceElement.textContent = `R$ ${newPrice}`;
            }
        }

        // Adiciona o "ouvinte" para quando o usuário trocar de plano
        planOptions.forEach(option => {
            option.addEventListener('change', updatePrice);
        });

        // Atualiza o preço inicial assim que a página carrega
        updatePrice();

    } else {
        // Se o produto não for encontrado
        document.querySelector('.checkout-container').innerHTML = '<h1 style="text-align: center; grid-column: 1 / -1;">Produto não encontrado!</h1>';
    }

    // Adicione um ouvinte de evento para o botão de checkout
    const checkoutButton = document.getElementById('checkoutButton');

    checkoutButton.addEventListener('click', (event) => {
        const selectedPlanInput = document.querySelector('input[name="plan"]:checked');
        if (selectedPlanInput) {
            const selectedPlanValue = selectedPlanInput.value;
            // Redireciona para o checkout com os parâmetros na URL
            window.location.href = `checkout.html?product=${productId}&plan=${selectedPlanValue}`;
        } else {
            event.preventDefault(); // Impede o clique se não houver plano selecionado
            alert('Por favor, selecione um plano antes de continuar.');
        }
    });
});