var allElements = [];
var num = 767;
var elements = [];
var elementsNew = [];

function setupGames() {
    function initGames() {
        var nodeList = document.querySelectorAll('.game-item');
        Array.from(nodeList).forEach(function(el) {
            allElements.push(el);
            console.log(el);
        });
        //for (let i = 0; i < num; i++) {
            //allElements.push('<div class="game-item">' + document.querySelector('.game-item').innerHTML + '</div>');
            //document.querySelector('.game-item').remove();
        //}
    }
    function writeAll() {
        for (let i = 0; i < allElements.length; i++) {
            document.querySelector('#game-list').innerHTML += allElements[i];
        }
    }
    function writeNew() {
        for (let i = 0; i < elementsNew.length; i++) {
            document.querySelector('#game-list').innerHTML += elementsNew[i];
        }
    }
    initGames();
    //writeAll();
}

document.addEventListener('DOMContentLoaded', () => {
    const loadingIndicator = document.getElementById('loading');
    const gameList = document.getElementById('game-list');

    // Function to fetch the game list from the external HTML file
    function fetchGameList() {
        return fetch('list.html')
            .then(response => response.text())
            .catch(error => {
                console.error('Error fetching game list:', error);
                return '';
            });
    }

    // Function to create game items from the fetched HTML
    function createGameItems(html) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;

        const cards = tempDiv.querySelectorAll('.card');

        cards.forEach(card => {
            const link = card.querySelector('a');
            const gameName = link.textContent;
            const gameUrl = link.href;
            let thumbnail;

            if (gameUrl.includes('?game=')) {
                // Flash game
                const gameParam = new URL(gameUrl).searchParams.get('game');
                thumbnail = `https://projectassets.teacherease.net/flash/images/${gameParam}.png`;
            } else {
                // HTML5 game
                const gameLink = new URL(gameUrl).searchParams.get('url');
                thumbnail = gameLink.replace(/index\.htm(l)?$/, 'cover.png');
            }

            const gameItem = document.createElement('div');
            gameItem.classList.add('game-item');
            //gameItem.onclick = function() { window.location.href = link.href; }

            const gameImage = document.createElement('img');
            gameImage.src = thumbnail;
            gameImage.alt = gameName;

            const gameTitle = document.createElement('h3');
            gameTitle.textContent = gameName;
            
            const gameLinkNew = document.createElement('a');
            gameLinkNew.href = link.href;
            
            gameLinkNew.appendChild(gameImage);
            gameLinkNew.appendChild(gameTitle);
            //gameItem.onclick = () => {
                //window.location.href = link.href;
            //};

            gameItem.appendChild(gameLinkNew);
            gameList.appendChild(gameItem);
        });
    }

    // Fetch and load the game list
    fetchGameList().then(html => {
        // Hide loading indicator
        loadingIndicator.style.display = 'none';

        // Create game items
        createGameItems(html);

        setupGames();
    });
});
