document.addEventListener('DOMContentLoaded', () => {
    const loadingIndicator = document.getElementById('loading');
    const gameList = document.getElementById('game-list');

    // Function to extract games data from existing HTML structure
    function extractGameData() {
        const games = [];
        const cards = document.querySelectorAll('.card a');

        cards.forEach(card => {
            const url = card.href;
            const name = card.textContent;
            const thumbnail = url.replace('index.html', 'cover.png').replace('project.html?url=', '');

            games.push({ name, link: url, thumbnail });
        });

        return games;
    }

    // Function to load games from extracted data
    function loadGames(games) {
        games.forEach(game => {
            const gameItem = document.createElement('div');
            gameItem.classList.add('game-item');

            const gameImage = document.createElement('img');
            gameImage.src = game.thumbnail;
            gameImage.alt = game.name;

            const gameTitle = document.createElement('h3');
            gameTitle.textContent = game.name;

            gameItem.appendChild(gameImage);
            gameItem.appendChild(gameTitle);
            gameItem.onclick = () => {
                window.location.href = game.link;
            };

            gameList.appendChild(gameItem);
        });
    }

    // Extract games data from existing HTML
    const gamesData = extractGameData();

    // Hide loading indicator
    loadingIndicator.style.display = 'none';

    // Load games
    loadGames(gamesData);
});

