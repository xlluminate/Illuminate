function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

var allElements = [];
var num = 900;
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
}

function extractFlashGameURL(href) {
    var url = href;
    if (url.indexOf('#') !== -1) {
        var queryString = url.split('#')[1];
        var parameters = queryString.split('&');
        for (var i = 0; i < parameters.length; i++) {
            var parameter = parameters[i];
            if (parameter.startsWith('game=')) {
                return parameter.substring(5);
            }
        }
    }
    return null;
}

document.addEventListener('DOMContentLoaded', () => {
    const loadingIndicator = document.getElementById('loading');
    const gameList = document.getElementById('game-list');

    // Ensure gamedomain cookie is set
    var gamedomain = getCookie('gamedomain');
    if (!gamedomain) {
        gamedomain = "projectassets.teacherease.net";
        setCookie('gamedomain', gamedomain, 365);
    }

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
            let gameLinkNew;

            if (gameUrl.includes('#game=')) {
                // Flash game
                const gameParam = extractFlashGameURL(gameUrl);
                thumbnail = `https://${gamedomain}/flash/images/${gameParam}.png`;
                gameLinkNew = `/project.html?url=https://${gamedomain}/flash/#game=${gameParam}`;
            } else {
                // HTML5 game
                const gameLink = new URL(gameUrl).searchParams.get('url');
                const newUrl = `https://${gamedomain}${gameLink}`; //gameLink.replace(/https:\/\/[^/]+/, `https://${gamedomain}`);
                thumbnail = newUrl.replace(/index\.htm(l)?$/, 'cover.png');
                gameLinkNew = `/project.html?url=${newUrl}`;
            }

            const gameItem = document.createElement('div');
            gameItem.classList.add('game-item');

            const gameImage = document.createElement('img');
            gameImage.src = thumbnail;
            gameImage.alt = gameName;

            const gameTitle = document.createElement('h3');
            gameTitle.textContent = gameName;

            const gameLinkElement = document.createElement('a');
            gameLinkElement.href = gameLinkNew;

            gameLinkElement.appendChild(gameImage);
            gameLinkElement.appendChild(gameTitle);

            gameItem.appendChild(gameLinkElement);
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
