export default function header() {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const siteHeader = document.createElement('h1');
    const ul = document.createElement('ul');
    const menuLi = document.createElement('li');
    const contactLi = document.createElement('li');


    header.classList.add('container','d-flex','align-items-center','justify-content-between');
    // nav.classList.add('d-flex','align-items-center','justify-content-center');

    siteHeader.classList.add('display-6');
    siteHeader.id = "home";
    ul.classList.add('d-flex','list-unstyled');
    menuLi.classList.add('fs-4','mx-2');
    menuLi.id = "menu";
    contactLi.classList.add('fs-4','mx-2');
    contactLi.id = "contact";

    siteHeader.innerText = "The Biriyani Way";
    menuLi.innerText = "Menu";
    contactLi.innerText = "Contact";

    ul.appendChild(menuLi);
    ul.appendChild(contactLi);
    
    nav.appendChild(ul);
    
    header.appendChild(siteHeader);
    header.appendChild(nav);


    return header;
}