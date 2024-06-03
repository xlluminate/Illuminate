document.addEventListener('DOMContentLoaded', () => {
    fetch('games.json')
        .then(response => response.json())
        .then(data => {
            const gameList = document.getElementById('game-list');
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
        .catch(error => console.error('Error loading games:', error));
});
