
function tolog() {
    window.location.href = "login.html";
}
function tohome() {
    window.location.href = "index.html";
}


// -----------------------dark mode-----------------------
document.addEventListener('DOMContentLoaded', (event) => {
    loadTheme();
});

function saveTheme() {
    const themeSelector = document.getElementById('theme-selector');
    const selectedTheme = themeSelector.value;
    localStorage.setItem('theme', selectedTheme);
    applyTheme(selectedTheme);
}

function loadTheme() {
    const themeSelector = document.getElementById('theme-selector');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        themeSelector.value = savedTheme;
        applyTheme(savedTheme);
    }
}

function applyTheme(theme) {
    document.body.className = theme;
    if (theme === 'dark') {
        document.body.style.backgroundColor = 'black';
    } else {
        document.body.style.backgroundColor = 'white';
    }
}

// ---------------------increase and decrease number
const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
number = document.querySelector(".number");
let a=1;

plus.addEventListener("click",()=>{
a++;
a= (a<10) ? "0" +a : a;
number.innerText = a ;
console.log("a");
});


minus.addEventListener("click",()=>{
if(a>1){
    a--;
    a= (a<10) ? "0" +a : a;
    number.innerText = a ;
}
});