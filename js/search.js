var allElements = [];
//var num = 900;
for (let i = 0; i < num; i++) {
    allElements.push('<div class="card">' + document.querySelector('.card').innerHTML + '</div>');
    document.querySelector('.card').remove();
}
//document.querySelector('#games').innerHTML = allElements;
function writeAll() {
    for (let i = 0; i < allElements.length; i++) {
        document.querySelector('#games').innerHTML += allElements[i];
    }
}
var elements = [];
var elementsNew = [];
function writeNew() {
    for (let i = 0; i < elementsNew.length; i++) {
        document.querySelector('#games').innerHTML += elementsNew[i];
    }
}
writeAll();
function search() {
    document.querySelector('#games').innerHTML = '';
    writeAll();
    value = document.getElementById('search').value;
    elements = [];
    elementsNew = [];
    console.log(document.querySelector('.card').textContent);
    if (!(value == '')) {
        for (let i = 0; i < num; i++) {
            console.log(document.querySelector('.card').textContent.toLowerCase().includes(value.toLowerCase()));
            if (document.querySelector('.card').textContent.toLowerCase().includes(value.toLowerCase())) {
                //document.querySelector('.card').style.display = 'block';
                elementsNew.push('<div class="card">' + document.querySelector('.card').innerHTML + '</div>');
                document.querySelector('.card').remove();
            } else {
                //document.querySelector('.card').style.display = 'none';
                elements.push('<div class="card">' + document.querySelector('.card').innerHTML + '</div>');
                document.querySelector('.card').remove();
            }
        }
        //document.querySelector('#games').innerHTML = elementsNew;
        document.querySelector('#games').innerHTML = '';
        writeNew();
    } else {
        //document.querySelector('#games').innerHTML = allElements;
        document.querySelector('#games').innerHTML = '';
        writeAll();
    }
}
function random() {
    var game = Math.floor(Math.random() * allElements.length);
    document.querySelector('#games').innerHTML = '';
    document.querySelector('#games').innerHTML += allElements[game];
} 
