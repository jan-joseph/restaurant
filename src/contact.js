export default function contact() {
    const contact = document.createElement('div');
    const contactUsHeading = document.createElement('h2');
    const email = document.createElement('p');
    const phone = document.createElement('p');

    contactUsHeading.innerText = "Contact Us";
    phone.innerText = "Phone - 0999999";
    email.innerText = "Email - *******@biriyaniway.com";

    phone.classList.add('fs-5');
    email.classList.add('fs-5');
    contact.classList.add('d-flex','flex-column','align-items-center','justify-content-center','p-5');
    contactUsHeading.classList.add('display-6','fw-bold','mt-3');



    contact.appendChild(contactUsHeading);
    contact.appendChild(phone);
    contact.appendChild(email);

    return contact;
}