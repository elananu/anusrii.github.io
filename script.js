// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.style.background = "rgba(10,10,20,0.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
    } else {
        header.style.background = "rgba(0,0,0,.35)";
        header.style.boxShadow = "none";
    }
});

// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// SCROLL REVEAL
// ===============================

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.15

});

document.querySelectorAll(".card,.project,.timeline-card,.cert-card,.contact-box").forEach(el=>{

el.classList.add("fade-up");

observer.observe(el);

});

// ===============================
// COUNTER ANIMATION
// ===============================

const counters = document.querySelectorAll(".stats h1");

const speed = 150;

counters.forEach(counter=>{

const animate = ()=>{

const target = parseInt(counter.innerText);

const current = +counter.getAttribute("data-count") || 0;

const increment = target/speed;

if(current<target){

counter.setAttribute("data-count",Math.ceil(current+increment));

counter.innerText=Math.ceil(current+increment)+"+";

setTimeout(animate,15);

}else{

counter.innerText=target+"+";

}

};

animate();

});

// ===============================
// SMOOTH BUTTON ANIMATION
// ===============================

document.querySelectorAll("a").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transition=".3s";

});

});

// ===============================
// CONTACT FORM
// ===============================

const form = document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been sent.");

form.reset();

});

}

// ===============================
// FLOATING EFFECT
// ===============================

document.querySelectorAll(".project").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

card.style.transform = `
perspective(1000px)
rotateX(${-(y-rect.height/2)/25}deg)
rotateY(${(x-rect.width/2)/25}deg)
translateY(-10px)
`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateX(0) rotateY(0)";

});

});

// ===============================
// TYPING EFFECT
// ===============================

const typing = document.querySelector(".hero-content h2");

if(typing){

const words = [

"AI Engineer",

"Flutter Developer",

"Python Developer",

"Machine Learning Engineer",

"Full Stack Developer"

];

let wordIndex=0;

let charIndex=0;

let isDeleting=false;

function type(){

const currentWord=words[wordIndex];

typing.textContent=currentWord.substring(0,charIndex);

if(!isDeleting){

charIndex++;

if(charIndex>currentWord.length){

isDeleting=true;

setTimeout(type,1200);

return;

}

}else{

charIndex--;

if(charIndex==0){

isDeleting=false;

wordIndex=(wordIndex+1)%words.length;

}

}

setTimeout(type,isDeleting?60:120);

}

type();

}

// ===============================
// SCROLL TO TOP BUTTON
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="25px";
topBtn.style.right="25px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.cursor="pointer";
topBtn.style.fontSize="22px";
topBtn.style.background="#F5C542";
topBtn.style.color="#111";
topBtn.style.display="none";
topBtn.style.boxShadow="0 8px 20px rgba(0,0,0,.35)";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ===============================
// END
// ===============================