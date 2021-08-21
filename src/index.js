import './style.scss' ;


import header from "./header";
import footer from "./footer";
import home from "./home";
import menu from "./menu";
import contact from './contact';


function render() {
    const content = document.getElementById('content');
    const tab = document.createElement('div');

    content.appendChild(header());
    const homeBtn = document.getElementById('home');
    const menuBtn = document.getElementById('menu');
    const contactBtn = document.getElementById('contact');

    content.classList.add('d-flex','flex-column','aling-items-center','justify-content-between');

    
    tab.appendChild(home());
    content.appendChild(tab);

    content.appendChild(footer());

    homeBtn.addEventListener('click',e => {
        tab.removeChild(tab.firstChild);
        tab.appendChild(home());
    });
    menuBtn.addEventListener('click', e => {
        tab.removeChild(tab.firstChild);
        tab.appendChild(menu());
    });
    contactBtn.addEventListener('click' ,e => {
        tab.removeChild(tab.firstChild);
        tab.appendChild(contact());
    })
}

render();
