<script setup>
import HeaderTop from '../components/HeaderTop.vue'
import swip from '../components/swip.vue'
import room from '@/components/room.vue'
import HeaderBot from '../components/HeaderBot.vue'
import colorful from '@/components/colorful.vue'
import lineproduct from '@/components/lineproduct.vue'
import FooterBot from '@/components/FooterBot.vue'
import lineProduct2 from '@/components/lineProduct2.vue'
import lineProduct3 from '@/components/lineProduct3.vue'
import CountDown from '../components/CountDown.vue' 
import Increase from '../components/Increase.vue'
import slideAds from '../components/slideAds.vue'
</script>

<template>
  <colorful />
  <HeaderTop />
  <HeaderBot />
  <swip />
  <div class="on">
    <div class="half">
      <img src="../assets/pic/adobestock_637506025_neutre.jpg" alt="" />
    </div>
    <div class="half">
      <img src="../assets/pic/living-room-design-1200x620.jpg" alt="" />
    </div>
  </div>
  <div class="new-arrive">
    <h5>New Arrival Items</h5>
    <ul type="none">
      <li>Hot Sale</li>
      <li><a href="#deal">Deal of the week</a></li>
      <li><a href="#best">Best Seller</a></li>
      <li><a href="#popular">Most Popular</a></li>
    </ul>
  </div>
  <lineproduct />
  <slideAds/>
  <div class="new-arrive">
    <a href="#" name="deal"><h5>Deal of the week</h5></a>
  </div>
  <div class="deal">
    <div class="small-deal">
      <div class="box">
        <img src="../assets/pic/deal-middle-1.png" alt="" />
      </div>
      <div class="box-right">
        <p>Dark automatic clock best for living room</p>
        <h6><b>120.00$</b> <s>200.00$</s></h6>
        <CountDown id="sesection1" />
        <Increase/>
      </div>
    </div>
    <div class="small-deal">
      <div class="box">
        <img src="../assets/pic/deal-middle-2.png" alt="" />
      </div>
      <div class="box-right">
        <p>Dark automatic clock best for living room</p>
        <h6><b>120.00$</b> <s>200.00$</s></h6>
        <CountDown id="sesection2" />
        <Increase/>
      </div>
    </div>
  </div>
  <room />
  <div class="true">
    <div class="box">
      <div class="sbox"><i class="fa-solid fa-truck"></i></div>
      <div style="padding-left: 10px; padding-top: 15px">
        <h6>Free Shipping</h6>
      </div>
    </div>
    <div class="box">
      <div class="sbox"><i class="fa-solid fa-box"></i></div>
      <div style="padding-left: 10px; padding-top: 15px">
        <h6>Well Cared Package</h6>
      </div>
    </div>
    <div class="box">
      <div class="sbox"><i class="fa-brands fa-hire-a-helper"></i></div>
      <div style="padding-left: 10px; padding-top: 15px">
        <h6>24/7 Help/Support</h6>
      </div>
    </div>
    <div class="box">
      <div class="sbox"><i class="fa-solid fa-arrow-right-arrow-left"></i></div>
      <div style="padding-left: 10px; padding-top: 15px">
        <h6>Could Be Return</h6>
      </div>
    </div>
    <div class="box">
      <div class="sbox"><i class="fa-solid fa-location-dot"></i></div>
      <div style="padding-left: 10px; padding-top: 15px">
        <h6>Main Location</h6>
      </div>
    </div>
  </div>
  <div class="pot">
    <div class="left">
      <img src="../assets/pic/pot-flower.png" alt="" />
    </div>
    <div class="right">
      <p>Small Beautiful Piece For Decoration</p>
      <h1>Summer Sales</h1>
      <p>
        The product that can be very versitile, affortable and beautiful could be found nowhere but
        with us.
      </p>
      <div class="shop">
        <p>Shop</p>
      </div>
    </div>
  </div>
  <div class="best-seller">
    <a href="#" name="best"><h1>Best Seller Product</h1></a>
  </div>
  <lineProduct3/>
  <div class="pot">
    <div class="ta-left">
      <p>Small Beautiful Piece For Decoration</p>
      <h1>Most Popular Sales</h1>
      <p>
        The product that can be very versitile, affortable and beautiful could be found nowhere but
        with us.
      </p>
      <div class="shop">
        <p>Shop</p>
      </div>
    </div>
    <div class="ta-right">
      <img src="../assets/pic/table-out.png" alt="" />
    </div>
  </div>
  <div class="best-seller">
    <a href="#" name="popular"><h1>Most Popular Product</h1></a>
  </div>
  <lineProduct2 />
  <div class="diss">
    <div class="diss-left">
      <img src="../assets/pic/hello.png" alt="" />
    </div>
    <div class="diss-right">
      <video width="100%" height="100%" controls loop autoplay muted>
        <source src="../assets/pic/loop-vid.MP4" type="video/mp4" />
      </video>
      <div class="cover"></div>
    </div>
  </div>
  <FooterBot />
</template>

<style>
.new-arrive {
  display: flex;
  width: 90%;
  margin: auto;
  height: 50px;
  padding-left: 25px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.557);
}
.new-arrive h5 {
  font-weight: 700;
  margin-right: 40px;
}
.new-arrive ul {
  width: 450px;
  padding-top: 3px;
  display: flex;
  justify-content: space-between;
}
.new-arrive li {
  font-size: 15px;
  font-weight: 600;
}
.on {
  margin: auto;
  margin-top: -50px;
  width: 90%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  padding-left: 10px;
  padding-right: 10px;
}
.on .half {
  width: 670px;
  height: 360px;
  border-radius: 0%;
}
.half img {
  width: 100%;
  height: 100%;
}
/* ----------true */
.true {
  margin: auto;
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: space-between;
}
.true h6 {
  font-weight: 700;
}
.true .box {
  width: 220px;
  height: 100%;
  display: flex;
}
.box .sbox {
  width: 50px;
  height: 50px;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(214, 214, 214);
}

/* ------------------------------deal */
.deal {
  margin: auto;
  margin-top: 20px;
  margin-bottom: 100px;
  width: 90%;
  height: 400px;
  display: flex;
  justify-content: space-around;
  padding-left: 10px;
  padding-right: 10px;
}
.small-deal {
  width: 670px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(162, 162, 162, 0.343);
}
.small-deal .box {
  width: 300px;
  height: 300px;
}
.small-deal .box img {
  transition: 0.3s;
  width: 100%;
  height: 100%;
}
.box-right {
  width: 370px;
  height: 100%;
  padding-top: 100px;
}
.box-right p {
  color: goldenrod;
  font-size: 18px;
  font-weight: 700;
}
.box-right h6 {
  font-weight: 700;
  font-size: 20px;
}
.box-right s {
  color: #949494;
}
.small-deal .box img:hover {
  transform: scale(1.2);
  cursor: pointer;
  transition: 0.3s;
}

/* -----------------------------pot */
.pot {
  margin: auto;
  margin-top: 230px;
  margin-bottom: 100px;
  width: 90%;
  height: 400px;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  background-color: #20cdcd;
}
.pot .left {
  position: relative;
  width: 1300px;
  height: 100%;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  background-color: #20cdcd;
}
.pot .left img {
  width: 800px;
  position: absolute;
  top: -170px;
}
.pot .right {
  color: white;
  padding-top: 100px;
  padding-right: 100px;
}
.pot .right .shop {
  width: 120px;
  height: 40px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  padding-top: 7px;
  font-weight: 700;
  background-color: goldenrod;
  transition: 0.3s;
}
.pot .right .shop:hover {
  transition: 0.3s;
  transform: scale(1.1);
  cursor: pointer;
}
.pot .ta-left .shop:hover {
  transition: 0.3s;
  transform: scale(1.1);
  cursor: pointer;
}
.best-seller {
  margin-bottom: 50px;
  text-align: center;
}
.best-seller h1 {
  font-weight: 800;
}
.pot .ta-left {
  width: 600px;
  height: 100%;
  color: white;
  padding-top: 100px;
  padding-left: 100px;
}
.pot .ta-right {
  width: 700px;
  height: 100%;
  position: relative;
  border-radius: 30px;
}
.pot .ta-right img {
  position: absolute;
  top: -200px;
  width: 100%;
  height: 600px;
}
.pot .ta-left .shop {
  width: 120px;
  height: 40px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  padding-top: 7px;
  font-weight: 700;
  background-color: goldenrod;
  transition: 0.3s;
}

/* -----------------disss */
.diss {
  width: 100%;
  height: 500px;
  display: flex;
}
.diss-left {
  background-color: darkgrey;
  width: 40%;
  height: 100%;
}
.diss-right {
  background-color: darkgrey;
  width: 60%;
  height: 100%;
  position: relative;
}
.diss-right .cover {
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  position: absolute;
}
.diss-left img {
  animation: float 4s ease-in-out infinite;
  width: 100%;
  height: 100%;
}
@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0);
  }
}




/* -------------------------------swiper */
.swiper{
  width: 100%;
  height: 500px;
}
.swiper img{
  width: 100%;
  height: 100%;
}
</style>
