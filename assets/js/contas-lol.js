document.addEventListener('DOMContentLoaded', () => {
    // Referências aos elementos do DOM
    const championList = document.getElementById('championList');
    const skinCarousel = document.getElementById('skinCarousel');
    const accountsGrid = document.getElementById('accountsGrid');
    const championSearch = document.getElementById('championSearch');
    const skinSelectionSection = document.getElementById('skinSelectionSection');
    const accountsSection = document.getElementById('accountsSection');

    // Versão da API do DDragon. Você pode pegá-la dinamicamente se quiser.
    const ddragonVersion = '14.13.1';
    const ddragonUrl = `https://ddragon.leagueoflegends.com/cdn/${ddragonVersion}`;

    let allChampionsData = null;
    let currentChampion = null;

    // Função para habilitar/desabilitar uma seção
    const toggleSection = (section, enable) => {
        if (enable) {
            section.classList.remove('disabled');
        } else {
            section.classList.add('disabled');
        }
    };

    // Função para renderizar as contas (continua com dados fictícios)
    const renderAccounts = (accounts) => {
        accountsGrid.innerHTML = '';
        if (!accounts || !accounts.length) {
            accountsGrid.innerHTML = `<p style="text-align: center; color: var(--text-secondary);">Nenhuma conta disponível com esta skin no momento.</p>`;
            return;
        }

        accounts.forEach(account => {
            const accountCard = document.createElement('div');
            accountCard.className = 'account-card';
            accountCard.innerHTML = `
                <div class="account-info">
                    <h3>${account.summonerName}</h3>
                    <p>Elo: <span class="rank-level">${account.rank}</span></p>
                    <p>Nível: <span class="rank-level">${account.level}</span></p>
                </div>
                <div class="account-price">${account.price}</div>
                <button class="account-buy-button">Comprar Agora</button>
            `;
            accountsGrid.appendChild(accountCard);
        });
    };

    // Função para renderizar os campeões
    const renderChampions = (champions) => {
        championList.innerHTML = '';
        const championArray = Object.values(champions).sort((a, b) => a.name.localeCompare(b.name));
        championArray.forEach(champion => {
            const championIconContainer = document.createElement('div');
            championIconContainer.className = 'champion-icon-container';
            championIconContainer.dataset.championId = champion.id;
            championIconContainer.innerHTML = `
                <img src="${ddragonUrl}/img/champion/${champion.image.full}" alt="${champion.name}" class="champion-icon">
                <span class="champion-name">${champion.name}</span>
            `;
            championList.appendChild(championIconContainer);
        });
    };

    // Função para renderizar as skins de um campeão
    const renderSkins = (champion) => {
        skinCarousel.innerHTML = '';
        if (!champion || !champion.skins.length) {
            skinCarousel.innerHTML = `<p style="text-align: center; color: var(--text-secondary);">Nenhuma skin encontrada para este campeão.</p>`;
            return;
        }

        // A URL das splash arts não usa a versão no caminho, apenas no CDN
        const splashArtBaseUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash`;
        const normalizedChampionId = champion.id.replace(/[^a-zA-Z0-9]/g, '');

        champion.skins.forEach((skin) => {
            // A DDragon usa 'num: 0' para a skin padrão.
            const skinImageURL = `${splashArtBaseUrl}/${normalizedChampionId}_${skin.num}.jpg`;

            const skinCard = document.createElement('div');
            skinCard.className = 'skin-card';
            skinCard.dataset.skinName = skin.name;
            skinCard.dataset.skinNum = skin.num;
            skinCard.innerHTML = `
            <img src="${skinImageURL}" alt="${skin.name}">
            <span class="skin-name">${skin.name}</span>
        `;
            skinCarousel.appendChild(skinCard);
        });
    };

    // Função para buscar dados de um campeão específico com suas skins
    const fetchChampionData = async (championName) => {
        try {
            const response = await fetch(`${ddragonUrl}/data/pt_BR/champion/${championName}.json`);
            if (!response.ok) throw new Error('Não foi possível carregar os dados do campeão.');
            const data = await response.json();
            return data.data[championName];
        } catch (error) {
            console.error('Erro ao buscar dados do campeão:', error);
            return null;
        }
    };

    // Lógica principal de seleção de campeão
    championList.addEventListener('click', async (event) => {
        const target = event.target.closest('.champion-icon-container');
        if (!target) return;

        // Limpa a seleção anterior
        document.querySelectorAll('.champion-icon-container.selected').forEach(el => el.classList.remove('selected'));
        target.classList.add('selected');

        const championId = target.dataset.championId;
        currentChampion = await fetchChampionData(championId);

        // Renderiza as skins e habilita a seção de skins
        renderSkins(currentChampion);
        toggleSection(skinSelectionSection, true);

        // Reseta a seção de contas
        skinCarousel.scrollLeft = 0;
        document.querySelectorAll('.skin-card.selected').forEach(el => el.classList.remove('selected'));
        accountsGrid.innerHTML = '';
        toggleSection(accountsSection, false);
    });

    // Lógica principal de seleção de skin
    skinCarousel.addEventListener('click', (event) => {
        const target = event.target.closest('.skin-card');
        if (!target) return;

        // Limpa a seleção anterior
        document.querySelectorAll('.skin-card.selected').forEach(el => el.classList.remove('selected'));
        target.classList.add('selected');

        const skinName = target.dataset.skinName;

        // **AQUI VOCÊ PRECISARIA BUSCAR AS CONTAS ASSOCIADAS À SKIN**
        // Como não temos um backend para isso, vamos simular com dados fictícios.
        // O ideal seria fazer uma requisição para o seu servidor, tipo:
        // const accounts = await fetch(`/api/accounts?skinName=${skinName}`);

        // Simulação de dados de contas com base na skin
        const mockAccounts = [{
            summonerName: "Jogador Fera",
            rank: "Ouro IV",
            level: 100,
            price: "R$ 80,00"
        }, {
            summonerName: "Main Lux",
            rank: "Platina I",
            level: 150,
            price: "R$ 120,00"
        }];

        renderAccounts(mockAccounts);
        toggleSection(accountsSection, true);
    });

    // Lógica de pesquisa de campeão
    championSearch.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();
        if (allChampionsData) {
            const filteredChampions = Object.values(allChampionsData).filter(champion =>
                champion.name.toLowerCase().includes(query)
            );
            renderChampions(filteredChampions);
        }
    });

    // Função de inicialização
    const initializePage = async () => {
        try {
            const response = await fetch(`${ddragonUrl}/data/pt_BR/champion.json`);
            if (!response.ok) throw new Error('Não foi possível carregar a lista de campeões.');
            const data = await response.json();
            allChampionsData = data.data;
            renderChampions(allChampionsData);
        } catch (error) {
            console.error('Erro na inicialização:', error);
            championList.innerHTML = `<p style="text-align: center; color: red;">Erro ao carregar os campeões. Tente novamente mais tarde.</p>`;
        }
    };

    // Inicia o processo de carregamento dos dados
    initializePage();
});