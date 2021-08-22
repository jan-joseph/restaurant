export default function footer () {
    const footer = document.createElement('footer');
    const copyright = document.createElement('p');

    copyright.innerText = "Copyright 2021 The Biriyani Way";

    copyright.classList.add('text-light','fs-6','my-0','p-2','glass', 'rounded-pill');
    footer.classList.add('d-flex','align-items-center','justify-content-center');
    
    footer.appendChild(copyright);

    return footer;
}