// -------------------------------countdown
var countDownDate = new Date("August 10, 2024 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math. floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math. floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math. floor ((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math. floor ((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance < 0){
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }

},1000);
// ---------------------------------coundown-1
var countlow = new Date("August 10, 2024 00:00:00").getTime();
var y = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var daysOne = Math. floor(distance / (1000 * 60 * 60 * 24));
    var hoursOne = Math. floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesOne = Math. floor ((distance % (1000 * 60 * 60)) / (1000 * 60));
    var secondsOne = Math. floor ((distance % (1000 * 60)) / 1000);

    document.getElementById("daysOne").innerHTML = daysOne;
    document.getElementById("hoursOne").innerHTML = hoursOne;
    document.getElementById("minutesOne").innerHTML = minutesOne;
    document.getElementById("secondsOne").innerHTML = secondsOne;

    if(distance < 0){
        document.getElementById("daysOne").innerHTML = "00";
        document.getElementById("hoursOne").innerHTML = "00";
        document.getElementById("minutesOne").innerHTML = "00";
        document.getElementById("secondsOne").innerHTML = "00";
    }
},1000);


// ---------------------------------increase
// const plus = document.querySelector(".plus"),
//     minus = document.querySelector(".minus"),
//     number = document.querySelector(".number");
// let a=1;

// plus.addEventListener("click",()=>{
// a++;
// a= (a<10) ? "0" +a : a;
// number.innerText = a ;
// console.log("a");
// });


// minus.addEventListener("click",()=>{
// if(a>1){
//     a--;
//     a= (a<10) ? "0" +a : a;
//     number.innerText = a ;
// }
// });
