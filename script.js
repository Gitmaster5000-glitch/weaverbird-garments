const faders = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
faders.forEach(section => {
const rect = section.getBoundingClientRect();
if(rect.top < window.innerHeight - 100){
section.classList.add('show');
}
});
});
// Counter Animation
const counters = document.querySelectorAll('.counter');

const runCounter = () => {
counters.forEach(counter => {
const target = +counter.getAttribute('data-target');
const increment = target / 200;

const updateCount = () => {
const count = +counter.innerText;

if(count < target){
counter.innerText = Math.ceil(count + increment);
setTimeout(updateCount, 10);
} else {
counter.innerText = target;
}
};

updateCount();
});
};

window.addEventListener("scroll", () => {
const statsSection = document.querySelector(".stats");
if(statsSection.getBoundingClientRect().top < window.innerHeight){
runCounter();
}
});
