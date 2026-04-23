let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ADD TO CART */
function add(item){
cart.push(item);
localStorage.setItem("cart", JSON.stringify(cart));
alert(item + " added");
}

/* VIEW CART */
function getCart(){
return JSON.parse(localStorage.getItem("cart")) || [];
}

/* CHECKOUT */
function checkout(){
let msg="Weaver Bird Order:%0A"+cart.join("%0A");
window.open("https://wa.me/254722264464?text="+msg);
}

/* FILTER */
function filter(cat){
document.querySelectorAll(".card").forEach(c=>{
c.style.display = (cat==="all" || c.classList.contains(cat)) ? "block":"none";
});
}

/* SEARCH */
function search(){
let v=document.getElementById("search").value.toLowerCase();
document.querySelectorAll(".card").forEach(c=>{
c.style.display=c.innerText.toLowerCase().includes(v)?"block":"none";
});
}
