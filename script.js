// =========================
// SCROLL ACTIVO EN NAVBAR
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    let current = "";

    // HEADER EFFECT
    if(window.scrollY > 50){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

    // ACTIVE LINKS
    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href").includes(current)){
            link.classList.add("active");
        }

    });

});

// =========================
// ANIMACION AL HACER SCROLL
// =========================

const cards = document.querySelectorAll(
    ".project-card, .education-card, .skill"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {
    observer.observe(card);
});

// =========================
// DETECTAR IDIOMA
// =========================

const language = navigator.language.startsWith("es") ? "es" : "en";

const elements = document.querySelectorAll("[data-es]");

elements.forEach(element => {

    element.innerHTML = element.dataset[language];

});

// =========================
// EFECTO ESCRITURA HERO
// =========================

const text = "Junior Software Developer";
const typingElement = document.querySelector(".hero-text h3");

let index = 0;
let typingStarted = false;

function writeText(){

    if(index < text.length){

        typingElement.textContent += text.charAt(index);

        index++;

        setTimeout(writeText, 100);

    }

}

// INICIA EL TYPING
function startTyping(){

    typingElement.textContent = "";
    index = 0;

    writeText();

}

// DETECTAR CUANDO VUELVE AL HERO
window.addEventListener("scroll", () => {

    const heroSection = document.querySelector(".hero");

    const heroHeight = heroSection.offsetHeight;

    // SI ESTA EN HERO
    if(window.scrollY < heroHeight / 2){

        if(!typingStarted){

            typingStarted = true;

            startTyping();

        }

    }else{

        typingStarted = false;

    }

});

// INICIO
startTyping();
