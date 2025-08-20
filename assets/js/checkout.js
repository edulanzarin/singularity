document.addEventListener('DOMContentLoaded', () => {
    // Banco de dados simulado com informações dos produtos
    const productData = {
        // --- PRODUTOS SPOOFER ---
        'bioguard': {
            title: 'BioGuard Spoofer',
            description: 'Spoofer 100% Anti-Vanguard. Nosso sistema mais avançado garante bypass completo e indetectável do Riot Vanguard. Volte a jogar sem preocupações com proteção HWID definitiva. Segurança máxima e desempenho intacto.',
            image: 'assets/images/spoofer.jpg',
            prices: {
                lifetime: '110.00'
            },
            category: { name: 'Spoofer', link: 'spoofer.html' } // Categoria adicionada
        },
        'portable': {
            title: 'Portable Spoofer',
            description: 'A solução mais prática e rápida contra banimentos de HWID...',
            image: 'assets/images/portable-spoofer.jpg',
            prices: {
                monthly: '120.00',
                lifetime: '250.00'
            },
            category: { name: 'Spoofer', link: 'spoofer.html' } // Categoria adicionada
        },
        // --- PRODUTOS DE LEAGUE OF LEGENDS ---
        'lol-obsydian': {
            title: 'Obysidian League of Legends',
            description: 'Script completo com features avançadas para dominar o jogo...',
            image: 'assets/images/lol-obsydian.jpg',
            prices: {
                weekly: '35.00',
                monthly: '85.00',
                lifetime: '150.00'
            },
            category: { name: 'League of Legends', link: 'lol.html' } // Categoria adicionada (assumindo que você tem ou terá uma página lol.html)
        },
        'lol-crash': {
            title: 'Crash Ultimate PEN DRIVE',
            description: 'Uma solução indetectável que roda diretamente do seu Pen Drive...',
            image: 'assets/images/lol-crash.jpg',
            prices: {
                weekly: '70.00',
                monthly: '110.00',
                lifetime: '150.00'
            },
            category: { name: 'League of Legends', link: 'lol.html' } // Categoria adicionada
        },
        'lol-engine': {
            title: 'Engine Soul',
            description: 'Ferramenta de alta performance para otimização de scripts...',
            image: 'assets/images/lol-engine.jpg',
            prices: {
                weekly: '15.00',
                monthly: '45.00',
                lifetime: '200.00'
            },
            category: { name: 'League of Legends', link: 'lol.html' } // Categoria adicionada
        }
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
});