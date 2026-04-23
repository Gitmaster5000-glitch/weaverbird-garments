// SCROLL ANIMATION
const faders = document.querySelectorAll('.fade');

const appearOnScroll = new IntersectionObserver(
(entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add('show');
}
});
},
{threshold:0.2}
);

faders.forEach(fader=>{
appearOnScroll.observe(fader);
});

// COUNTER ANIMATION
const counters = document.querySelectorAll('.counter');

counters.forEach(counter=>{
const updateCount = ()=>{
const target = +counter.getAttribute('data-target');
const count = +counter.innerText;

const increment = target / 200;

if(count < target){
counter.innerText = Math.ceil(count + increment);
setTimeout(updateCount,10);
}else{
counter.innerText = target;
}
};

updateCount();
});

// MODAL
function openModal(image,name){
document.getElementById('modal').style.display="flex";
document.getElementById('modal-img').src=image;
document.getElementById('modal-text').innerText=name;
}

function closeModal(){
document.getElementById('modal').style.display="none";
}
