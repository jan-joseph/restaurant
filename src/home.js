export default function home() {
    const home = document.createElement('div');
    const about = document.createElement('p');
    const hoursHeading = document.createElement('h2');
    const ul = document.createElement('ul');
    const locationHeading = document.createElement('h2');
    const location = document.createElement('p');


    about.innerText = "We make the Biriyani way";
    hoursHeading.innerText = "Working Hours";
    locationHeading.innerText = "Location";
    location.innerText = "1023, Dream Blvd, San."

    ul.classList.add('list-unstyled');
    home.classList.add('container','d-flex','flex-column','align-items-center','justify-content-center');


    const workingTimes = [
        'SUN : 9 AM to 11 PM',
        'MON : 9 AM to 8 PM',
        'TUE : 9 AM to 8 PM',
        'WED : 9 AM to 8 PM',
        'THU : 9 AM to 8 PM',
        'FRI : 9 AM to 11 PM',
        'SAT : 9 AM to 11 PM'
    ]

    workingTimes.forEach(time => {
        const li = document.createElement('li');
        li.innerText = time;
        ul.appendChild(li);
    });

    home.appendChild(about);
    home.appendChild(hoursHeading);
    home.appendChild(ul);
    home.appendChild(locationHeading);
    home.appendChild(location);

    return home;
}