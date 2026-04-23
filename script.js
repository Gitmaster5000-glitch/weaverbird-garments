const faders = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
faders.forEach(section => {
const rect = section.getBoundingClientRect();
if(rect.top < window.innerHeight - 100){
section.classList.add('show');
}
});
});
