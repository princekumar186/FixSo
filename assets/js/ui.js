let index = 0;
function reviewSlider() {

    const reviews = document.querySelectorAll(".review-card");

    reviews.forEach(r => r.style.display = "none");

    index++;

    if (index > reviews.length) {
        index = 1;
    }

    reviews[index - 1].style.display = "block";

    setTimeout(reviewSlider, 3000);

}

reviewSlider();

const container = document.getElementById("serviceGrid");

services.forEach(service => {

    const card = document.createElement("div");
    card.classList.add("service-card");

    card.innerHTML = `
<i class="fa-solid ${service.icon} icon"></i>
<h3>${service.title}</h3>
<p>${service.desc}</p>
<span>Starting ₹${service.price}</span>
<button onclick="openModal('${service.title}')">Book Now</button>
`;

    container.appendChild(card);

});


const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach(el => {

        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }

    });

});
const servicesList = [
"ac repair",
"electrician",
"plumbing",
"home cleaning",
"salon",
"painting"
];

function searchService() {

let input = document.getElementById("search").value.toLowerCase().trim();

let cards = document.querySelectorAll(".service-card");

let found = false;

cards.forEach(card => {

let title = card.querySelector("h3").innerText.toLowerCase();

if (title.includes(input) || input === "") {

card.style.display = "";
found = true;

} else {

card.style.display = "none";

}

});

const msg = document.getElementById("noResult");

let related = servicesList.some(service => service.includes(input));

if (!found && input.length > 2 && related) {

msg.style.display = "block";

} else {

msg.style.display = "none";

}

}


/* suggestion system */

document.getElementById("search").addEventListener("input", function(){

let value = this.value.toLowerCase().trim();

let suggestion = servicesList.find(service => service.startsWith(value));

if(suggestion){
this.setAttribute("placeholder","Did you mean: " + suggestion);
}else{
this.setAttribute("placeholder","Search services...");
}

});


/* ENTER key support */

document.getElementById("search").addEventListener("keypress", function(e){

if(e.key === "Enter"){

searchService();

/* jump to services section */

document.querySelector(".services").scrollIntoView({
behavior: "auto"
});

}

});