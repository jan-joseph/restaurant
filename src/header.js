export default function header() {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const siteHeader = document.createElement('h1');
    const ul = document.createElement('ul');
    const menuLi = document.createElement('li');
    const contactLi = document.createElement('li');

    // Adding ID for Event Listener
    siteHeader.id = "home";
    menuLi.id = "menu";
    contactLi.id = "contact";

    // Adding Bootstrap Classes
    nav.classList.add('container','d-flex','align-items-center','justify-content-between','p-3');
    siteHeader.classList.add('display-6','cursor-pointer','text-light');
    ul.classList.add('d-flex','list-unstyled');
    menuLi.classList.add('fs-4','mx-2','cursor-pointer','text-light');
    contactLi.classList.add('fs-4','mx-2','cursor-pointer','text-light');

    // Adding the Text Content
    siteHeader.innerText = "The Biriyani Way";
    menuLi.innerText = "Menu";
    contactLi.innerText = "Contact";

    // Modifying the Nav Content
    ul.appendChild(menuLi);
    ul.appendChild(contactLi);
    
    // Final Header DOM structure
    nav.appendChild(siteHeader);
    nav.appendChild(ul);
    header.appendChild(nav);


    return header;
}