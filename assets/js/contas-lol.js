// Dados dos campeões de League of Legends (apenas alguns para exemplo)
const champions = [
    { name: 'Aatrox', id: 'Aatrox' },
    { name: 'Ahri', id: 'Ahri' },
    { name: 'Akali', id: 'Akali' },
    { name: 'Alistar', id: 'Alistar' },
    { name: 'Amumu', id: 'Amumu' },
    { name: 'Anivia', id: 'Anivia' },
    { name: 'Annie', id: 'Annie' },
    { name: 'Aphelios', id: 'Aphelios' },
    { name: 'Ashe', id: 'Ashe' },
    { name: 'Aurelion Sol', id: 'AurelionSol' },
    { name: 'Azir', id: 'Azir' },
    { name: 'Bard', id: 'Bard' },
    { name: 'Blitzcrank', id: 'Blitzcrank' },
    { name: 'Braum', id: 'Braum' },
    { name: 'Caitlyn', id: 'Caitlyn' },
    { name: 'Camille', id: 'Camille' },
    { name: 'Cassiopeia', id: 'Cassiopeia' },
    { name: 'Chogath', id: 'Chogath' },
    { name: 'Darius', id: 'Darius' },
    { name: 'Diana', id: 'Diana' },
    { name: 'Dr. Mundo', id: 'DrMundo' },
    { name: 'Draven', id: 'Draven' },
    { name: 'Ekko', id: 'Ekko' },
    { name: 'Elise', id: 'Elise' },
    { name: 'Evelynn', id: 'Evelynn' },
    { name: 'Ezreal', id: 'Ezreal' },
    { name: 'Fiddlesticks', id: 'Fiddlesticks' },
    { name: 'Fiora', id: 'Fiora' },
    { name: 'Fizz', id: 'Fizz' },
    { name: 'Garen', id: 'Garen' },
    { name: 'Gnar', id: 'Gnar' },
    { name: 'Graves', id: 'Graves' },
    { name: 'Hecarim', id: 'Hecarim' },
    { name: 'Heimerdinger', id: 'Heimerdinger' },
    { name: 'Irelia', id: 'Irelia' },
    { name: 'Janna', id: 'Janna' },
    { name: 'Jarvan IV', id: 'JarvanIV' },
    { name: 'Jax', id: 'Jax' },
    { name: 'Jayce', id: 'Jayce' },
    { name: 'Jhin', id: 'Jhin' },
    { name: 'Jinx', id: 'Jinx' },
    { name: 'Kaisa', id: 'Kaisa' },
    { name: 'Kalista', id: 'Kalista' },
    { name: 'Katarina', id: 'Katarina' },
    { name: 'Kayle', id: 'Kayle' },
    { name: 'Kindred', id: 'Kindred' },
    { name: 'Kled', id: 'Kled' },
    { name: 'Kogmaw', id: 'KogMaw' },
    { name: 'LeBlanc', id: 'LeBlanc' },
    { name: 'Lee Sin', id: 'LeeSin' },
    { name: 'Leona', id: 'Leona' },
    { name: 'Lillia', id: 'Lillia' },
    { name: 'Lux', id: 'Lux' },
    { name: 'Maokai', id: 'Maokai' },
    { name: 'Master Yi', id: 'MasterYi' },
    { name: 'Miss Fortune', id: 'MissFortune' },
    { name: 'Mordekaiser', id: 'Mordekaiser' },
    { name: 'Morgana', id: 'Morgana' },
    { name: 'Nami', id: 'Nami' },
    { name: 'Nasus', id: 'Nasus' },
    { name: 'Nautilus', id: 'Nautilus' },
    { name: 'Neeko', id: 'Neeko' },
    { name: 'Nidalee', id: 'Nidalee' },
    { name: 'Nocturne', id: 'Nocturne' },
    { name: 'Nunu', id: 'Nunu' },
    { name: 'Olaf', id: 'Olaf' },
    { name: 'Orianna', id: 'Orianna' },
    { name: 'Ornn', id: 'Ornn' },
    { name: 'Pantheon', id: 'Pantheon' },
    { name: 'Poppy', id: 'Poppy' },
    { name: 'Qiyana', id: 'Qiyana' },
    { name: 'Quinn', id: 'Quinn' },
    { name: 'Rakan', id: 'Rakan' },
    { name: 'Rammus', id: 'Rammus' },
    { name: 'RekSai', id: 'RekSai' },
    { name: 'Renekton', id: 'Renekton' },
    { name: 'Rengar', id: 'Rengar' },
    { name: 'Riven', id: 'Riven' },
    { name: 'Rumble', id: 'Rumble' },
    { name: 'Ryze', id: 'Ryze' },
    { name: 'Samira', id: 'Samira' },
    { name: 'Sejuani', id: 'Sejuani' },
    { name: 'Senna', id: 'Senna' },
    { name: 'Seraphine', id: 'Seraphine' },
    { name: 'Sett', id: 'Sett' },
    { name: 'Shaco', id: 'Shaco' },
    { name: 'Shen', id: 'Shen' },
    { name: 'Shyvana', id: 'Shyvana' },
    { name: 'Sion', id: 'Sion' },
    { name: 'Sivir', id: 'Sivir' },
    { name: 'Sona', id: 'Sona' },
    { name: 'Soraka', id: 'Soraka' },
    { name: 'Swain', id: 'Swain' },
    { name: 'Sylas', id: 'Sylas' },
    { name: 'Tahm Kench', id: 'TahmKench' },
    { name: 'Taliyah', id: 'Taliyah' },
    { name: 'Talon', id: 'Talon' },
    { name: 'Taric', id: 'Taric' },
    { name: 'Teemo', id: 'Teemo' },
    { name: 'Thresh', id: 'Thresh' },
    { name: 'Tristana', id: 'Tristana' },
    { name: 'Trundle', id: 'Trundle' },
    { name: 'Twisted Fate', id: 'TwistedFate' },
    { name: 'Twitch', id: 'Twitch' },
    { name: 'Udyr', id: 'Udyr' },
    { name: 'Urgot', id: 'Urgot' },
    { name: 'Varus', id: 'Varus' },
    { name: 'Vayne', id: 'Vayne' },
    { name: 'Veigar', id: 'Veigar' },
    { name: 'Velkoz', id: 'Velkoz' },
    { name: 'Vex', id: 'Vex' },
    { name: 'Vi', id: 'Vi' },
    { name: 'Viego', id: 'Viego' },
    { name: 'Viktor', id: 'Viktor' },
    { name: 'Vladimir', id: 'Vladimir' },
    { name: 'Volibear', id: 'Volibear' },
    { name: 'Warwick', id: 'Warwick' },
    { name: 'Wukong', id: 'Wukong' },
    { name: 'Xayah', id: 'Xayah' },
    { name: 'Xerath', id: 'Xerath' },
    { name: 'Xin Zhao', id: 'XinZhao' },
    { name: 'Yasuo', id: 'Yasuo' },
    { name: 'Yone', id: 'Yone' },
    { name: 'Yuumi', id: 'Yuumi' },
    { name: 'Zac', id: 'Zac' },
    { name: 'Zed', id: 'Zed' },
    { name: 'Zeri', id: 'Zeri' },
    { name: 'Ziggs', id: 'Ziggs' },
    { name: 'Zilean', id: 'Zilean' },
    { name: 'Zoe', id: 'Zoe' },
    { name: 'Zyra', id: 'Zyra' },
];

// Dados das contas (exemplo, você deve substituir pelos seus dados reais)
// Note que eu adicionei a propriedade 'champion'
const lolAccounts = [
    {
        id: 'conta-lol-01',
        title: 'Conta Platina - Várias Skins de Aatrox',
        champion: 'Aatrox',
        skins: ['Aatrox', 'Aatrox_2', 'Aatrox_3'],
        image: 'assets/images/placeholder-lol.jpg',
        originalPrice: '300.00',
        currentPrice: '250.00'
    },
    {
        id: 'conta-lol-02',
        title: 'Conta Ouro - Main ADC (Jinx)',
        champion: 'Jinx',
        skins: ['Jinx_7', 'Jinx_10', 'Jinx_1'],
        image: 'assets/images/placeholder-lol-jinx.jpg',
        originalPrice: '200.00',
        currentPrice: '150.00',
    }
];

const championListElement = document.getElementById('championList');
const accountsGridElement = document.getElementById('accountsGrid');
const championSearchInput = document.getElementById('championSearch');
const gridTitleElement = document.getElementById('gridTitle');

// Obtém a versão mais recente do Data Dragon dinamicamente
async function getLatestVersion() {
    try {
        const response = await fetch('https://ddragon.leagueoflegends.com/api/versions.json');
        const versions = await response.json();
        return versions[0];
    } catch (error) {
        console.error('Erro ao buscar a versão da API:', error);
        return '14.16.1'; // Versão padrão
    }
}

let selectedChampion = null;

// Função para renderizar a lista de campeões
function renderChampions(filteredChampions) {
    championListElement.innerHTML = '';
    filteredChampions.forEach(champion => {
        const championDiv = document.createElement('div');
        championDiv.classList.add('champion-icon-container');
        championDiv.setAttribute('data-champion-id', champion.id);

        const img = document.createElement('img');
        img.classList.add('champion-icon');
        // A API da Riot para ícones de campeões é: http://ddragon.leagueoflegends.com/cdn/14.16.1/img/champion/ChampionId.png
        // (A versão '14.16.1' pode mudar, mas o formato é o mesmo)
        img.src = `https://ddragon.leagueoflegends.com/cdn/54.16.1/img/champion/${champion.id}.png`;
        img.alt = champion.name;

        const name = document.createElement('span');
        name.classList.add('champion-name');
        name.textContent = champion.name;

        championDiv.appendChild(img);
        championDiv.appendChild(name);

        championDiv.addEventListener('click', () => {
            handleChampionSelection(champion.name);
        });

        championListElement.appendChild(championDiv);
    });
}

// Renderiza o carrossel de skins
function renderSkins(championId, skins) {
    const skinCarouselElement = document.getElementById('skinCarousel');
    skinCarouselElement.innerHTML = ''; // Limpa o carrossel anterior

    skins.forEach(skin => {
        const skinDiv = document.createElement('div');
        skinDiv.classList.add('skin-card');
        skinDiv.setAttribute('data-skin-id', skin.num);

        const img = document.createElement('img');
        img.classList.add('skin-image');
        img.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_${skin.num}.jpg`;
        img.alt = skin.name;

        const name = document.createElement('span');
        name.classList.add('skin-name');
        name.textContent = skin.name;

        skinDiv.appendChild(img);
        skinDiv.appendChild(name);
        skinCarouselElement.appendChild(skinDiv);

        skinDiv.addEventListener('click', () => {
            handleSkinSelection(skin.name, skin.num);
        });
    });

    // Mostra a seção do carrossel de skins
    document.getElementById('skinCarouselSection').style.display = 'block';
}

// Lida com a seleção de uma skin
function handleSkinSelection(skinName, skinNum) {
    document.querySelectorAll('.skin-card').forEach(card => card.classList.remove('selected'));
    document.querySelector(`.skin-card[data-skin-id='${skinNum}']`).classList.add('selected');

    gridTitleElement.textContent = `Contas com a Skin ${skinName}`;
    filterAndRenderAccountsBySkin(skinName);
}

// Filtra as contas com base na skin selecionada
function filterAndRenderAccountsBySkin(skinName) {
    const filteredAccounts = lolAccounts.filter(account => {
        // Encontre a skin ID (número) correspondente ao nome da skin
        // Esta parte pode ser complexa. O ideal é que a sua base de dados já tenha o ID da skin.
        // Por exemplo, se a sua conta tem a skin 'Ahri_4', você deve filtrar por ela.
        // Para simplificar, vamos usar o nome da skin para filtrar as contas.
        return account.skins.some(s => s.toLowerCase() === skinName.toLowerCase());
    });
    renderAccounts(filteredAccounts);
}

// Função para renderizar os cards de contas
function renderAccounts(accounts) {
    accountsGridElement.innerHTML = '';
    if (accounts.length === 0) {
        accountsGridElement.innerHTML = '<p class="no-results-message">Nenhuma conta encontrada para o campeão selecionado.</p>';
        return;
    }

    accounts.forEach(account => {
        const cardHtml = `
            <a href="checkout.html?id=${account.id}" class="product-card fade-up-element">
                <div class="card-image">
                    <img src="${account.image}" alt="${account.title}">
                </div>
                <div class="card-content">
                    <h3 class="product-title">${account.title}</h3>
                    <p class="product-subtitle">Conta com skin grátis de ${account.champion}</p>
                    <div class="price-range">
                        <span class="original-price">R$ ${account.originalPrice}</span>
                        <span class="current-price">R$ ${account.currentPrice}</span>
                    </div>
                    <button class="buy-button">Comprar Agora</button>
                </div>
            </a>
        `;
        accountsGridElement.innerHTML += cardHtml;
    });
}

// Atualize esta função para buscar as skins do campeão
async function handleChampionSelection(championName) {
    document.querySelectorAll('.champion-icon-container').forEach(icon => {
        icon.classList.remove('selected');
    });

    const championId = champions.find(c => c.name === championName).id;
    const selectedIcon = document.querySelector(`.champion-icon-container[data-champion-id='${championId}']`);
    if (selectedIcon) {
        selectedIcon.classList.add('selected');
    }

    selectedChampion = championName;

    // Esconde as contas antigas e mostra o carrossel de skins
    document.getElementById('accountsGrid').innerHTML = '';
    document.getElementById('gridTitle').textContent = `Selecione uma Skin de ${championName}`;
    document.getElementById('skinCarouselSection').style.display = 'block';

    // Chama a API para buscar os dados do campeão e suas skins
    const latestVersion = await getLatestVersion();
    const url = `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/pt_BR/champion/${championId}.json`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const championData = data.data[championId];
        renderSkins(championId, championData.skins);
    } catch (error) {
        console.error('Erro ao buscar skins:', error);
        document.getElementById('skinCarousel').innerHTML = '<p class="no-results-message">Não foi possível carregar as skins.</p>';
    }
}

// Função para filtrar as contas com base no campeão selecionado
function filterAndRenderAccounts() {
    let filteredAccounts = lolAccounts;
    if (selectedChampion) {
        filteredAccounts = lolAccounts.filter(account => account.champion.toLowerCase() === selectedChampion.toLowerCase());
    }
    renderAccounts(filteredAccounts);
}

// Evento de pesquisa
championSearchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredChampions = champions.filter(champion => champion.name.toLowerCase().includes(searchTerm));
    renderChampions(filteredChampions);
});

// Inicialização
document.addEventListener('DOMContentLoaded', async () => {
    renderChampions(champions);
    // Inicialmente, não mostre nenhuma conta
    renderAccounts([]);
});