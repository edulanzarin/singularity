// assets/js/checkout.js - VERSÃO DINÂMICA E FLEXÍVEL

document.addEventListener('DOMContentLoaded', () => {
    // Banco de dados simulado com informações dos produtos
    const productData = {
        // --- PRODUTOS SPOOFER (JÁ EXISTENTES) ---
        'bioguard': {
            title: 'BioGuard Spoofer',
            description: 'Nosso spoofer mais avançado, garantindo proteção completa e indetectável. Ideal para quem busca segurança máxima e desempenho em todos os cenários. Compatível com os principais sistemas.',
            image: 'assets/images/spoofer.jpg',
            prices: {
                weekly: '70.00',
                monthly: '150.00',
                lifetime: '300.00'
            }
        },
        'portable': {
            title: 'Portable Spoofer',
            description: 'A solução perfeita para quem precisa de flexibilidade. Leve e eficiente, este spoofer funciona de forma portátil sem necessidade de instalações complexas. Proteção garantida em qualquer lugar.',
            image: 'assets/images/portable-spoofer.jpg',
            prices: {
                monthly: '120.00',
                lifetime: '250.00'
            }
        },
        // --- NOVOS PRODUTOS DE LEAGUE OF LEGENDS ---
        'lol-obsydian': {
            title: 'Obysidian League of Legends',
            description: 'Script completo com features avançadas para dominar o jogo. Inclui prediction, orbwalker e evade, tudo com a máxima segurança.',
            image: 'assets/images/lol-obsydian.jpg',
            prices: {
                weekly: '35.00',
                monthly: '85.00',
                lifetime: '150.00'
            }
        },
        'lol-crash': {
            title: 'Crash Ultimate PEN DRIVE',
            description: 'Uma solução indetectável que roda diretamente do seu Pen Drive, garantindo que nenhum arquivo fique em seu computador. Segurança e praticidade.',
            image: 'assets/images/lol-crash.jpg',
            prices: {
                weekly: '70.00',
                monthly: '110.00',
                lifetime: '150.00'
            }
        },
        'lol-engine': {
            title: 'Engine Soul',
            description: 'Ferramenta de alta performance para otimização de scripts e melhoria de desempenho no League of Legends. Essencial para usuários avançados.',
            image: 'assets/images/lol-engine.jpg',
            prices: {
                weekly: '15.00',
                monthly: '45.00',
                lifetime: '200.00'
            }
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
        // Atualiza os dados fixos do produto
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