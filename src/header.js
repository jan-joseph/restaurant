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
    nav.classList.add('mt-2','container','d-flex','align-items-center','justify-content-between','p-2','glass','rounded-3');
    siteHeader.classList.add('display-6','cursor-pointer','text-white');
    ul.classList.add('d-flex','list-unstyled','my-0');
    menuLi.classList.add('fs-3','mx-4','cursor-pointer','text-white','text-shadow');
    contactLi.classList.add('fs-3','mx-4','cursor-pointer','text-white','text-shadow');

    // Custom CSS Classes

    // Adding the Text Content
    siteHeader.innerText = "The Biriyani Way";
    menuLi.innerText = "Menu";
    contactLi.innerText = "Contact";

    // Modifying the Nav Content
    ul.appendChild(menuLi);
    ul.appendChild(contactLi);
    
    // Mouseover Effect
    menuLi.onmouseover = () => {
        menuLi.classList.replace('text-white','text-primary');
    }
    menuLi.onmouseout = () => {
        menuLi.classList.replace('text-primary','text-white');
    }

    contactLi.onmouseover = () => {
        contactLi.classList.replace('text-white','text-primary');
    }
    contactLi.onmouseout = () => {
        contactLi.classList.replace('text-primary','text-white');
    }



    // Final Header DOM structure
    nav.appendChild(siteHeader);
    nav.appendChild(ul);
    header.appendChild(nav);


    return header;
}