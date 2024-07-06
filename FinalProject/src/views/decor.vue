<script setup>
    import HeaderTop from '../components/HeaderTop.vue'
    import khan from '../components/khan.vue'
    import lineproduct from '../components/lineproduct.vue'
    import room from '../components/room.vue'
    import FooterBot from '../components/FooterBot.vue'
</script>

<template>
    <HeaderTop/>
    <div class="display">
        <h1 id="change" onclick="changeColor">Decoration</h1>
        <div class="p animate__animated animate__fadeInLeft"><p>We help many customer decor their house before and the feed back was positive 95%. They love our design.</p></div>
        <div class="click animate__animated animate__fadeInLeft">
            <p>Go Shop</p>
        </div>
    </div>
    <khan/>
    <div class="title">
        <div class="title-left">
            <div class="half-r"><h1>Leading decorting service</h1></div>
            <div class="half-r"><h1 style="float: right;">In all of Cambodia</h1></div>
        </div>
        <div class="title-right">
            <div class="round">
                <p style="color: white;">Beauty</p>
            </div>
        </div>
    </div>
    <div class="living-room">
        <div class="half-r">
            <img src="../assets/pic/livingroom.jpg" alt="">
        </div>
        <div class="half-r" style="padding-left: 50px;padding-right: 50px;padding-top: 50px;">
            <p style="color: #BC9127;">--------------- NEW COLLECTION</p>
            <h2 style="font-weight: 500;font-size: 45px;margin-bottom: 20px;">A Perfect Set For Your Living Room </h2>
            <p>Massa cras egestas laoreet montes, dapibus eu sit etiam curabitur faucibus habitasse lectus vestibulum leo, odio dolor quis maecenas faucibus vulputate pharetra nunc sed maecenas diam quisque habitasse.</p>
            <div class="shop">
                <p style="color: white;">Shop This Collection</p>
            </div>
        </div>
    </div>
    <lineproduct/>
    <room/>
    <div class="big-letter">
        <div class="sell-left">
            <p style="color: #BC9127;">--------------- Best Seller</p>
            <h2 style="font-size: 45px;margin-bottom: 20px;" data-aos="fade-right">Discover Our Most Selling Products</h2>
        </div>
        <div class="sell-right">
            <div class="view-best-sell" data-aos="fade-left">
                <p style="font-size: 15px;">VIEW ALL BEST SELLER</p>
            </div>
        </div>
    </div>
    <lineproduct/>
    <lineproduct/>
    <div class="discount">
        <div class="dis-small">
            <div class="dis-small-middle" data-aos="fade-left">
                <h1>Sale up to 50% OFF</h1>
                <p>Molestie amet tempor, diam id magna ridiculus tincidunt cursus curabitur non ipsum mattis in vel venenatis nam enim facilisis mi, egestas metus, nunc at.</p>
                <div class="shop-now">
                    <p>Shop Now</p>
                </div>
            </div>
        </div>
    </div>
    <div class="latest">
        <div class="left"></div>
        <div class="right-latest" data-aos="fade-left">
            <p style="color: #BC9127;">---- SUBSCRIBE TO OUR NEWSLETTER</p>
            <h2>See The Latest Collection & Get Special Offer</h2>
            <div class="sub">
                <div class="input-group mb-3" style="width: 73%;">
                    <input type="text" class="form-control" placeholder="Email Adress" aria-label="Username" aria-describedby="basic-addon1">
                </div>
                <button type="button" class="btn btn-secondary" style="background-color: #DAA520;height: 38px;font-size: 13px;letter-spacing: 2px;">SUBSCRIBE</button>
            </div>
        </div>
    </div>
    <FooterBot/>
</template>
    

<style>
.red{
    color: red;
}
    /* ---------------------------------display */
    .display{
        width: 100%;
        height: 650px;
        background-image: url(../assets/pic/house.jpg);
        background-size: 100%;
        padding-left: 100px;
        padding-top: 200px;
    }
    .display h1{
        font-size: 60px;
        font-weight: 900;
        color: #169999;
    }
    .display .p{
        width: 400px;
        color: white;
    }
    .click{
        display: flex;
        justify-content: center;
        padding-top: 6px;
        width: 130px;
        height: 40px;
        color: white;
        transition: 0.3s;
        border: 1px solid white;
    }
    .click:hover{
        cursor: pointer;
        transition: 0.3s;
        transform: scale(1.1);
    }

    /* ---------------------------------show */
    .title{
    margin: auto;    
    margin-top: 40px;
    margin-bottom: 20px;
    width: 90%;
    height: 200px;
    display: flex;
    }
    .title-left{
        width: 80%;
        height: 100%;
    }
    .half-r{
        width: 100%;
        height: 50%;
    }
    .half-r h1{
        font-size: 55px;
        font-weight: 900;
    }
    .title-right{
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .round{
        border-radius: 100%;
        width: 100px;
        height: 100px;
        text-align: center;
        padding-top: 35px;
        background-color: grey;
    }
    .living-room{
        margin: auto;
        width: 80%;
        height: 400px;
        margin-bottom: 60px;
        display: flex;
    }
    .living-room .half-r{
        width: 50%;
        height: 100%;
    }
    .living-room img{
        width: 100%;
        height: 100%;
    }
    .living-room .shop{
        cursor: pointer;
        margin-top: 30px;
        width: 200px;
        height: 40px;
        text-align: center;
        padding-top: 6px;
        background-color: #BC9127;
    }
    .shop p{
        font-weight: 600;
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
    /* ------------------------------------discount */
    .discount{
        width: 100%;
        height: 600px;
    }
    .dis-small{
        float: right;
        background-image: url(../assets/pic/discount.png);
        background-size: 100%;
        margin-bottom: 50px;
        display: flex;
        align-items: center;
        width: 72%;
        height: 100%;
    }
    .dis-small-middle{
        width: 540px;
        height: 340px;
        box-shadow: 0px 5px 30px 0px;
        margin-left: -250px;
        background-color: white;
        padding: 50px 50px 50px 50px;
    }
    .dis-small-middle h1{
        font-weight: 650;
        margin-bottom: 30px;
    }
    .shop-now{
        padding-top: 6px;
        margin-top: 30px;
        width: 140px;
        height: 40px;
        cursor: pointer;
        background-color: #DAA520;
    }
    .shop-now p{
        color: white;
        text-align: center;
        font-weight: 650;
    }

    /* -------------------------latest */
    .latest{
        margin-top: 150px;
        width: 100%;
        height: 345px;
        display: flex;
    }
    .latest .left{
        width: 50%;
        height: 100%;
        background-image: url(../assets/pic/sleep.png);
        background-size: 100%;
        background-repeat: no-repeat;
    }
    .right-latest{
        width: 30%;
        height: 100%;
        padding-top: 100px;
        padding-left: 50px;
    }
    .sub{
        margin-top: 30px;
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
    }
</style>
