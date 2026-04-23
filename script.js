// Scroll animation
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

// Modal functions
function openModal(image,name){
document.getElementById('modal').style.display="flex";
document.getElementById('modal-img').src=image;
document.getElementById('modal-text').innerText=name;
}

function closeModal(){
document.getElementById('modal').style.display="none";
}
