<template>
    <div class="footer">
        <div class="footer-top">
            <div class="footer-top-in">
                <div class="top-one">
                    <div class="home" style="margin-bottom: 40px;">
                        <div class="logo">
                            <img src="../assets/pic/logo1.png" alt="">
                        </div>
                        <h3>MUUTOS</h3>
                    </div>
                    <ul type="none">
                        <li><h6>3538 Torrance Blvd, Torrance, CA 90503, USA</h6></li>
                        <li><h6>+1 123 456 7890</h6></li>
                        <li><h6>info@example.com</h6></li>
                        <li><h6>Visit Our Store</h6></li>
                    </ul>
                </div>
                <div class="top-two">
                    <div class="top-head"><h3>Useful Links</h3></div>
                    <ul type="none">
                        <li><a href="">Home</a></li>
                        <li><a href="">Store</a></li>
                        <li><a href="">Decoration</a></li>
                        <li><a href="">Service</a></li>
                        <li><a href="">About us</a></li>
                    </ul>
                </div>
                <div class="top-two">
                    <div class="top-head"><h3>Rooms</h3></div>
                    <ul type="none">
                        <li><a href="">Living Room</a></li>
                        <li><a href="">Bedroom</a></li>
                        <li><a href="">Kitchen</a></li>
                        <li><a href="">Bath Room</a></li>
                        <li><a href="">Home Office</a></li>
                    </ul>
                </div>
                <div class="top-three">
                    <div class="top-head"><h3>Stay In Touch</h3></div>
                    <h6 style="color: white;letter-spacing: 1px;">Lorem ipsum dolor sit amet,consectetur adipiscing elit.</h6>
                    <div class="end">

                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="last">
                <h6>Copyright © 2024 Online Furniture Store</h6>
                <h6>Powered by Online Furniture Store</h6>
            </div>
        </div>
     </div>
</template>

<style scoped>
    .footer{
    width: 100%;
    height: 440px;
    background-color: #169999;
    }
    .footer-top{
        padding-top: 50px;
        width: 100%;
        height: 300px;
        border-bottom: 1px solid white;
    }
    .footer-top-in{
        margin: auto;
        width: 80%;
        height: 100%;
        display: flex;
    }
    .footer-top-in a{
        text-decoration: none;
        color: white;
    }
    .footer-top-in h3{
        color: white;
    }
    .top-one{
        width: 500px;
        height: 100%;
    }
    .top-one h6{
        color: white;
    }
    .top-two{
        width: 280px;
        height: 100%;
    }
    .top-two li{
        margin-left: -25px;
        margin-bottom: 5px;
    }
    .top-head{
        height: 50px;
        margin-bottom: 20px;
    }
    .top-head h3{
        font-weight: 400;
    }
    .top-three{
        width: 228px;
        height: 100%;
    }
    .footer-bottom{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 140px;
    }
    .end{
        margin-top: 20px;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
    }
    .end i{
        font-size: 40px;
    }
    .last{
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
        width: 80%;
        height: 40px;
        color: white;
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
</style>