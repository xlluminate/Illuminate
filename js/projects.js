//var allElements = [];
//var num = 760;
//for (let i = 0; i < num; i++) {
    //allElements.push('<div class="game-item">' + document.querySelector('.game-item').innerHTML + '</div>');
    //document.querySelector('.game-item').remove();
//}
//document.querySelector('#game-list').innerHTML = allElements;
function writeAll() {
    for (let i = 0; i < allElements.length; i++) {
        document.querySelector('#game-list').innerHTML += allElements[i];
    }
}
var elements = [];
var elementsNew = [];
function writeNew() {
    for (let i = 0; i < elementsNew.length; i++) {
        document.querySelector('#game-list').innerHTML += elementsNew[i];
    }
}
writeAll();
function search() {
    document.querySelector('#game-list-list').innerHTML = '';
    writeAll();
    value = document.getElementById('search').value;
    elements = [];
    elementsNew = [];
    console.log(document.querySelector('.game-item').textContent);
    if (!(value == '')) {
        for (let i = 0; i < num; i++) {
            console.log(document.querySelector('.game-item').textContent.toLowerCase().includes(value.toLowerCase()));
            if (document.querySelector('.game-item').textContent.toLowerCase().includes(value.toLowerCase())) {
                //document.querySelector('.game-item').style.display = 'block';
                elementsNew.push('<div class="game-item">' + document.querySelector('.game-item').innerHTML + '</div>');
                document.querySelector('.game-item').remove();
            } else {
                //document.querySelector('.game-item').style.display = 'none';
                elements.push('<div class="game-item">' + document.querySelector('.game-item').innerHTML + '</div>');
                document.querySelector('.game-item').remove();
            }
        }
        //document.querySelector('#game-list').innerHTML = elementsNew;
        document.querySelector('#game-list').innerHTML = '';
        writeNew();
    } else {
        //document.querySelector('#game-list').innerHTML = allElements;
        document.querySelector('#game-list').innerHTML = '';
        writeAll();
    }
}

//Random Button

function random() {
    var game = Math.floor(Math.random() * allElements.length);
    document.querySelector('#game-list').innerHTML = '';
    document.querySelector('#game-list').innerHTML += allElements[game];
} 
