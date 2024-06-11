function redirect() {
    window.location.href = "login.html";
}

document.querySelector(".small-eye").addEventListener("click",function(){
    document.querySelector(".popup").style.display = "flex";
});
document.querySelector(".exit").addEventListener("click",function(){
    document.querySelector(".popup").style.display = "none";
});