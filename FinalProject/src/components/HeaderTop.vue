
<template>
    <div>
        <div class="header">
            <div class="header-1">
                <div class="home">
                    <div class="logo">
                        <img src="../assets/pic/logo1.png" alt="">
                    </div>
                    <RouterLink to="/"><h3>MUUTOS</h3></RouterLink>
                </div>
                <div class="right">
                    <div class="right-header">
                        <ul type="none">
                            <li><RouterLink to="/"><p>Home</p></RouterLink></li>
                            <li><RouterLink to="/store"><p>Store</p></RouterLink></li>
                            <li><RouterLink to="/decor"><p>Decoration</p></RouterLink></li>
                            <li><RouterLink to="/service"><p>Service</p></RouterLink></li>
                            <li><RouterLink to="/about"><p>About</p></RouterLink></li>
                        </ul>
                    </div>
                    <div class="icon">
                        <div class="small-icon"><i class="fa-solid fa-user"></i></div>
                        <div class="small-icon"><i id="openbtn" @click="openNav"  class="fa-solid fa-cart-shopping"></i></div>
                        <div class="small-icon"><i class="fa-brands fa-facebook"></i></div>
                    </div>
                </div>
            </div>
            <div :class="['sidepanel', { open: isOpen }]" id="mySidepanel">
                <div class="header-panel">
                    <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
                    <h1 class="card-panel">Shopping Cart</h1>
                </div>
                <hr>
                <p>No products in the cart.</p>
                <button id="goto" @click="goto">Continue</button>
            </div>
        </div>
    </div>
</template>


<script>
export default{
    methods:{
        openNav(){
            const sidepanel = document.getElementById("mySidepanel");
            if (sidepanel){
                sidepanel.style.width = "600px";
                sidepanel.style.boxShadow = "10px 10px 10px 10px rgba(0, 0, 0, 0.6)";
                document.body.style.overflow = "hidden";
            }
        },
        closeNav(){
            const sidepanel = document.getElementById("mySidepanel");
            if (sidepanel) {
                sidepanel.style.width = "0";
                document.body.style.overflow = "auto";
            }
        },
        goto(){
            window.location.href = "/shop";
        },
        
    }
}
</script>


<style scoped>
    ul p{
        font-weight: 600;
    }
    *{
        padding: 0;
        box-sizing: border-box;
    }
    p{
        color: white;
    }
    h3{
        color: white;
    }
    .header{
        width: 100%;
        height: 80px;  
        background-color: #169999;
    }
    .header-1{
        margin: auto;
        width: 90%;
        height: 100%;
        display: flex;
        justify-content: space-between;
    }
    .home{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 170px;
    }
    .logo{
        width: 50px;
        height: 50px;
        margin-right: 2px;
        border-radius: 100%;
        overflow: hidden;
    }
    .logo img{
        width: 100%;
        height: 100%;
    }
    .right{
        display: flex;
        width: 650px;
        justify-content: space-between;
    }
    .right-header{
        padding-top: 55px;
        width: 400px;
    }
    .right ul{
        display: flex;
        justify-content: space-between;
        width: 400px;
    }
    .right li{
        color: white;
    }
    .icon{
        display: flex;
        justify-content: space-between;
        width: 200px;
        font-size: 25px;
        padding-top: 17px;
    }
    .small-icon{
        width: 50px;
        height: 50px;
        border-radius: 100%;
        background-color: #63c4a4;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .icon i{
        color: white;
    }
 
/* -----------------------------------------side-bar */
.sidepanel{
  width: 0;
  position: fixed;
  z-index: 1;
  height: 100vh;
  top: 0;
  right: 0;
  background-color:white;
  overflow-x: hidden;
  transition: 0.3s;
  padding-top: 50px;
}
.card-panel{
  margin-bottom:20px;
  margin-left: 20px;
  position: absolute;
  top: 10px;
}
.sidepanel p{
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40vh;
}
.sidepanel button{
  background-color: #169999;
  width: 95%;
  color: white;
  padding: 20px 0;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  margin: 0 auto;
  position: absolute;
  bottom: 10px; 
  left: 50%;
  transform: translateX(-50%);
}
.sidepanel button:hover{
  background-color: #111;
  cursor: pointer;
  transition: 1s;
}
.sidepanel a{
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
} 
.sidepanel a:hover{
  color: #f9b856;
}
.sidepanel .closebtn{
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
}
#openbtn{
  font-size: 25px;
  cursor: pointer;
  color: white;
  padding: 10px 15px;
  border: none;
}
.sidepanel p{
  color: black;
}
</style>