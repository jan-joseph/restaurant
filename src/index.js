import './style.scss' ;

import bgImage from './bg_cutting_board.jpg'

import header from "./header";
import footer from "./footer";
import home from "./home";
import menu from "./menu";
import contact from './contact';

function getFromStorage(){
    return JSON.parse(localStorage.getItem('selection'));
}
function saveToStorage(selection){
    localStorage.setItem('selection',JSON.stringify(selection));
}

function render() {
    const content = document.getElementById('content');
    const tab = document.createElement('div');
    
    const storedOption = getFromStorage();

    // Adding the Header Component
    content.appendChild(header());
    const homeBtn = document.getElementById('home');
    const menuBtn = document.getElementById('menu');
    const contactBtn = document.getElementById('contact');

    content.classList.add('d-flex','flex-column','aling-items-center','justify-content-between');
    document.body.style.background = "url("+bgImage+")";

    // Adding Component based on Local Stored Value
    if(storedOption == 'menu'){
        tab.appendChild(menu());
    } else if (storedOption == 'contact'){
        tab.appendChild(contact());
    } else {
        tab.appendChild(home());
    }

    // Adding the Tab Component
    content.appendChild(tab);

    // Adding the Footer Component
    content.appendChild(footer());

    // Tab update events for Home, Menu and Contact
    homeBtn.addEventListener('click',e => {
        tab.removeChild(tab.firstChild);
        tab.appendChild(home());
        saveToStorage('home');
    });
    menuBtn.addEventListener('click', e => {
        tab.removeChild(tab.firstChild);
        tab.appendChild(menu());
        saveToStorage('menu');
    });
    contactBtn.addEventListener('click' ,e => {
        tab.removeChild(tab.firstChild);
        tab.appendChild(contact());
        saveToStorage('contact');
    })
}

render();
