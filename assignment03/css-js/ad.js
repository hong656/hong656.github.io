function redirect() {
    window.location.href = "admin.html";
}
function tolog() {
    window.location.href = "index.html";
}

// ----------------------dark---------------
const toggle= document.getElementById("toggleDark");
const body =document.querySelector('body');

toggle.addEventListener('click',function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background="black";
        body.style.color="grey";
        body.style.transition="2s";
    }
    else{      
        body.style.background="white";
        body.style.color="black";
        body.style.transition="2s";
    }
})