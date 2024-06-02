// Fetch game data from JSON file and create game cards
fetch('projects.json')
    .then(response => response.json())
    .then(data => {
        const gamesContainer = document.getElementById('games-container');
        
        data.forEach(game => {
            // Create the game item element
            const gameItem = document.createElement('div');
            gameItem.classList.add('game-item');
            
            // Create the image element
            const gameImage = document.createElement('img');
            gameImage.src = game.image;
            gameImage.alt = game.name;
            
            // Create the title element
            const gameTitle = document.createElement('h3');
            gameTitle.textContent = game.name;
            
            // Append the image and title to the game item
            gameItem.appendChild(gameImage);
            gameItem.appendChild(gameTitle);
            
            // Add click event to open the game link
            gameItem.addEventListener('click', () => {
                window.location.href = game.link;
            });
            
            // Append the game item to the games container
            gamesContainer.appendChild(gameItem);
        });
    })
    .catch(error => console.error('Error fetching game data:', error));
