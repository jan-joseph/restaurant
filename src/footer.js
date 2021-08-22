export default function footer () {
    const footer = document.createElement('footer');
    const copyright = document.createElement('p');

    copyright.innerText = "Copyright 2021 The Biriyani Way";

    copyright.classList.add('text-light','fs-6');
    footer.classList.add('d-flex','align-items-center','justify-content-center','p-3');
    
    footer.appendChild(copyright);

    return footer;
}