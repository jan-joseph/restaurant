export default function footer () {
    const footer = document.createElement('footer');

    footer.classList.add('d-flex','align-items-center','justify-content-center');
    footer.innerText = "Copyright 2021 The Biriyani Way";

    return footer;
}