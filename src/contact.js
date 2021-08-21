export default function contact() {
    const contact = document.createElement('div');
    const contactUsHeading = document.createElement('h2');
    const email = document.createElement('p');
    const phone = document.createElement('p');

    contactUsHeading.innerText = "Contact Us";
    phone.innerText = "Phone - 0999999";
    email.innerText = "Email - *******@biriyaniway.com"

    contact.appendChild(contactUsHeading);
    contact.appendChild(phone);
    contact.appendChild(email);

    return contact;
}