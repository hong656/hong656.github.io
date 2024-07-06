<script setup>
    import HeaderTop from '../components/HeaderTop.vue'
    import khan from '../components/khan.vue'
    import craft from '../components/craft.vue'
    import FooterBot from '@/components/FooterBot.vue';
</script>

<template>
    <HeaderTop/>
    <div class="studio">
        <div class="in-studio">
            <div class="st-left">
                <h1>Modern Interior Design Studio Company</h1>
                <p>With a clean and beautiful Interior design from our studio might help you improve your health and change your lifestyle. We can also help you chose the right style fit especially for your taste. </p>
                <div class="line">
                    <div class="shop"><h6>Shop now</h6></div>
                    <div class="ex"><h6>Explore</h6></div>
                </div>
            </div>
            <div class="st-right animate__animated animate__fadeInUp">
                <img src="../assets/pic/studio.png">
            </div>
        </div>
    </div>
    <khan/>
    <craft/>
    <div class="big-letter">
        <div class="sell-left">
            <p style="color: #BC9127;">--------------- Understanding</p>
            <h2 style="font-size: 45px;margin-bottom: 20px;" data-aos="fade-right">Our Resoning And Build Trust</h2>
        </div>
        <div class="sell-right">
            <div class="view-best-sell" data-aos="fade-left">
                <p style="font-size: 15px;">Learn more</p>
            </div>
        </div>
    </div>
    <div class="choose">
        <div class="choose-side">
            <div class="choose-head">
                <h1>Why Choose US</h1>
                <p style="margin-top: 25px;">We are a well known company that we have lots of history with many famous customer. Many of  our customer entrusted us to decor their entire house and we have never fail their expectation. </p>
            </div>
            <div class="one">
                <div class="two">                
                    <div class="forth">
                        <i class="fa-solid fa-truck"></i>
                        <h6>Fast and free shipping</h6>
                        <p>Any order no matter how much and the amount we always ship to wherever the location you desire.</p>
                    </div>
                    <div class="forth">
                        <i class="fa-solid fa-box"></i>
                        <h6>Easy To Shop</h6>
                        <p>We have way more product than any other furniture company and product have all range of price.</p>
                    </div>
                </div>
                <div class="two">                
                    <div class="forth">
                        <i class="fa-brands fa-hire-a-helper"></i>
                        <h6>24/7 Support</h6>
                        <p>If our product have any problem you can come to us anytime of the day our staff will be there to help.</p>
                    </div>
                    <div class="forth">
                        <i class="fa-solid fa-arrow-right-arrow-left"></i>
                        <h6>Change Or Return</h6>
                        <p>If you don't like our product you can return it as long as it in a perfect shape. You can also change any product you like.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="choose-side">
            <img src="../assets/pic/choose.png" data-aos="fade-up-left">
        </div>
    </div>
    <FooterBot/>
</template>


<style>
    /* -------------------------------studio */
    .studio{
        width: 100%;
        height: 500px;
        background-color: #169999;
    }
    .in-studio{
        width: 80%;
        height: 90%;
        margin: auto;
        display: flex;
    }
    .st-left{
        width: 40%;
        height: 70%;
        margin-top: 60px;
    }
    .st-left h1{
        color: white;
        font-size: 45px;
        font-weight: 900;
        margin-bottom: 20px;
    }
    .st-left p{
        color: white;
    }
    .st-right{
        width: 70%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .line{
        margin-top: 30px;
        width: 60%;
        height: 50px;
        display: flex;
        justify-content: space-between;
    }
    .studio .shop{
        width: 150px;
        height: 50px;
        border-radius: 30px;
        padding-top: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid white;
        transition: 0.3s;
        background-color:yellow;
    }
    .studio .shop:hover{
        cursor: pointer;
        transform: scale(1.1);
        transition: 0.3s;
    }
    .ex{
        cursor: pointer;
        transition: 0.3s;
        width: 100px;
        height: 50px;
        border-radius: 30px;
        padding-top: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        border: 1px solid white;
    }
    /* -------------------------------studio */

    /* ------------------------choose */
    .choose{
        width: 80%;
        height: 600px;
        margin: auto;
        margin-bottom: 200px;
        display: flex;
    }
    .choose-side{
        width: 50%;
        height: 100%;
    }
    .choose-side img{
        float: right;
        width: 80%;
        height: 100%;
    }
    .choose-head{
        padding-top: 50px;
        width: 100%;
        height: 200px;
    }
    .one{
        width: 100%;
        height: 400px;
    }
    .two{
        display: flex;
        width: 100%;
        height: 50%;
    }
    .forth{
        width: 50%;
        height: 100%;
        padding-top: 20px;
        padding-right: 20px;
    }
    .forth i{
        margin-bottom: 20px;
        font-size: 30px;
    }

    /* ----------------------best-seller */
    .big-letter{
        margin: auto;
        margin-top: 150px;
        width: 80%;
        height: 180px;
        display: flex;
        justify-content: space-between;
    }
    .sell-left{
        width: 40%;
        height: 100%;
    }
    .sell-right{
        position: relative;
        display: flex;
        justify-content: center;
        width: 30%;
        height: 100%;
    }
    .sell-left h2{
        font-weight: 650;
    }
    .view-best-sell{
        position: absolute;
        cursor: pointer;
        bottom: 40px;
        width: 200px;
        height: 40px;
        text-align: center;
        padding-top: 8px;
        color: white;
        background-color: goldenrod;
    }
    #gap{
        margin-bottom: 100px;
    }
</style>