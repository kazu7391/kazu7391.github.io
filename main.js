
const divHome = document.getElementById('homePage');
divHome.innerHTML = '<p>Home</p>';
const newSpan = document.createElement('span');
newSpan.innerText = "aaa";
divHome.appendChild(newSpan);
divHome.removeChild(newSpan);

const texts = document.getElementsByTagName('p');
for(let i = 0; i < texts.length; i++) {
    texts[i].innerText = "Same as each other";
}

const classes = document.getElementsByClassName('main');
console.log(classes);

const nodes = document.querySelectorAll('a');
// nodes[0].href = "https://google.com";
// nodes[0].innerText = "Google";
// nodes[0].style.color = 'red';

function sayHi() {
    for(let i = 0; i < texts.length; i++) {
        texts[i].innerText = "Hi all";
    }
}

const aAlone = document.getElementById('a-btn');
aAlone.addEventListener('click', sayHi);

