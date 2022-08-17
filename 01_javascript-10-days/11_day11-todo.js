let formSelector = document.getElementById('ourForm');
let inputText = document.getElementById('input');
let ourList = document.getElementById('list')

formSelector.addEventListener('submit', (e) => {
    e.preventDefault()
    createElement(inputText.value)
});

function createElement(x) {
    let ourHTML = `<li>${x} <button onClick="deleteItem(this)">Delete</button></li>`
    ourList.insertAdjacentHTML('beforeend', ourHTML);
    inputText.value = "";
    inputText.focus();
}

function deleteItem(element) {
    element.parentElement.remove()
}