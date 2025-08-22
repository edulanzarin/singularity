document.addEventListener('DOMContentLoaded', () => {
    // Banco de dados simulado (igual ao da página package.html)
    const productData = {
        'vanguard-spoofer': {
            title: 'Vanguard Spoofer',
            description: 'Spoofer 100% Anti-Vanguard...',
            image: 'assets/images/vanguard-spoofer.jpg',
            prices: { lifetime: '70.00' },
            category: { name: 'Spoofer', link: 'spoofer.html' }
        },
        'biosecure-spoofer': {
            title: 'BioSecure Spoofer',
            description: 'Spoofer 100% Anti-Vanguard...',
            image: 'assets/images/vanguard-spoofer.jpg',
            prices: { lifetime: '100.00' },
            category: { name: 'Spoofer', link: 'spoofer.html' }
        },
        'portable-spoofer': {
            title: 'Portable Spoofer',
            description: 'A solução mais prática e rápida...',
            image: 'assets/images/portable-spoofer.jpg',
            prices: { lifetime: '90.00' },
            category: { name: 'Spoofer', link: 'spoofer.html' }
        },
        'quartzo-script-lol': {
            title: 'Quartzo Script',
            description: 'Script completo com features avançadas...',
            image: 'assets/images/quartzo-script-lol.png',
            prices: { lifetime: '80.00' },
            category: { name: 'League of Legends', link: 'lol.html' }
        },
        'orbitex-cheat-valorant': {
            title: 'Orbitex Cheat',
            description: 'Script completo com features avançadas...',
            image: 'assets/images/orbitex-cheat-valorant.jpg',
            prices: { lifetime: '60.00' },
            category: { name: 'Valorant', link: 'valorant.html' }
        },
        'maxi-cheat-valorant': {
            title: 'Maxi Cheat',
            description: 'Script completo com features avançadas...',
            image: 'assets/images/maxi-cheat-valorant.jpg',
            prices: { lifetime: '80.00' },
            category: { name: 'Valorant', link: 'valorant.html' }
        },
        'covert-cheat-valorant': {
            title: 'Covert Valorant',
            description: 'Script completo com features avançadas...',
            image: 'assets/images/covert-cheat-valorant.jpg',
            prices: { lifetime: '90.00' },
            category: { name: 'Valorant', link: 'valorant.html' }
        },
        'external-cheat-fortnite': {
            title: 'External Cheat Fortnite',
            description: 'Script completo com features avançadas...',
            image: 'assets/images/external-cheat-fortnite.jpg',
            prices: { lifetime: '80.00' },
            category: { name: 'Fortnite', link: 'fortnite.html' }
        },
        'sinfulexp-cheat-overwatch': {
            title: 'SinfulEXP Overwatch',
            description: 'Script completo com features avançadas...',
            image: 'assets/images/sinfulexp-cheat-overwatch.jpg',
            prices: { lifetime: '80.00' },
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
    const planId = params.get('plan');
    const product = productData[productId];

    if (product && planId) {
        // Obter os elementos do DOM
        const orderItemsContainer = document.getElementById('orderItemsContainer');
        const subtotalPriceElement = document.getElementById('subtotalPrice');
        const totalPriceElement = document.getElementById('totalPrice');
        const payButton = document.getElementById('payButton');
        const termsCheckbox = document.getElementById('termsCheckbox');
        const formFields = document.querySelectorAll('#firstName, #lastName, #email');
        const paymentOptions = document.querySelectorAll('.payment-option');

        // Adicionar o item do pedido ao resumo
        const selectedPlan = planLabels[planId] || planId;
        const price = parseFloat(product.prices[planId]).toFixed(2);

        const orderItemHTML = `
            <div class="order-item">
                <img src="${product.image}" alt="${product.title}">
                <div class="item-info">
                    <h4>${product.title}</h4>
                    <p>${selectedPlan} - ${product.category.name}</p>
                </div>
                <span class="item-price">R$ ${price}</span>
            </div>
        `;
        orderItemsContainer.innerHTML = orderItemHTML;

        // Atualizar os preços
        subtotalPriceElement.textContent = `R$ ${price}`;
        totalPriceElement.textContent = `R$ ${price}`;
        payButton.textContent = `Pagar R$ ${price}`;

        // Lógica de validação do formulário
        function validateForm() {
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const email = document.getElementById('email').value.trim();
            const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            const termsAccepted = termsCheckbox.checked;

            if (firstName && lastName && emailIsValid && termsAccepted) {
                payButton.disabled = false;
                // Remova esta linha para que o botão não "suma"
                // payButton.classList.add('fade-up-element'); 
            } else {
                payButton.disabled = true;
                // Remova esta linha para que o botão não "suma"
                // payButton.classList.remove('fade-up-element');
            }
        }

        // Adicionar listeners para os campos e checkbox
        formFields.forEach(field => field.addEventListener('input', validateForm));
        termsCheckbox.addEventListener('change', validateForm);

        // Adicionar listener para a seleção de método de pagamento
        paymentOptions.forEach(option => {
            option.addEventListener('click', () => {
                paymentOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
            });
        });

        // Adicionar listener para o botão de pagamento
        payButton.addEventListener('click', () => {
            if (!payButton.disabled) {
                const selectedMethod = document.querySelector('.payment-option.active input').value;
                alert(`Iniciando pagamento com ${selectedMethod} para ${product.title} (${selectedPlan}). Total: R$ ${price}`);
                // Aqui você adicionaria a lógica real para iniciar o pagamento (Crédito, Pix, etc.)
            }
        });

    } else {
        // Se o produto ou plano não for encontrado, redireciona para a página principal
        document.querySelector('main').innerHTML = '<h1 style="text-align: center;">Produto ou plano não encontrado! Redirecionando...</h1>';
        setTimeout(() => {
            window.location.href = 'index.html#products';
        }, 3000);
    }
});