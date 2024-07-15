
<template>
    <div>
        <div class="header">
            <div class="header-1">
                <div class="home">
                    <div class="logo">
                        <a href="index.html"><img src="../assets/pic/logo1.png" alt=""></a>
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
                        <div class="small-icon"><i class="fa-solid fa-cart-shopping"></i></div>
                        <div class="small-icon"><i class="fa-brands fa-facebook"></i></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


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
 

</style>