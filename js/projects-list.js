document.addEventListener('DOMContentLoaded', () => {
    const loadingIndicator = document.getElementById('loading');
    const gameList = document.getElementById('game-list');

    fetch('projects.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            loadingIndicator.style.display = 'none'; // Hide loading indicator

            data.games.forEach(game => {
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
        })
        .catch(error => {
            console.error('Error loading games:', error);
            loadingIndicator.textContent = 'Failed to load games.';
        });
});
