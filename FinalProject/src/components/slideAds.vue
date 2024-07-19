<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Pagination, Autoplay, Controller, Navigation } from 'swiper/modules';
    import 'swiper/css';
    import 'swiper/css/effect-cube';
    import 'swiper/css/pagination';
    import 'swiper/css/autoplay';
    import 'swiper/css/controller';
    import 'swiper/css/navigation'
</script>

<template>
    <div>
        <swiper :modules="[ Pagination, Autoplay, Controller, Navigation]"
         effect="cube"
         :grab-cursor="true"
         :loop="true"
         :pagination="true"
         :autoplay="true"
         :controller="true"
         :navigation="true"
         >
            <swiper-slide><div class="block">
                <img src="../assets/pic/dark-luxury.jpg">
            </div></swiper-slide>
            <swiper-slide><div class="block" id="b1">
                <img src="../assets/pic/dark.jpg">
            </div></swiper-slide>
            <swiper-slide><div class="block" id="b2">
                <img src="../assets/pic/intro.jpg">
            </div></swiper-slide>
            <swiper-slide><div class="block" id="b3">
                <img src="../assets/pic/login1.jpg">
            </div></swiper-slide>
            <swiper-slide><div class="block" id="b4">
                <img src="../assets/pic/luxury-dark-1.jpg" alt="">
            </div></swiper-slide>
        </swiper>
        <div class="overtext">
            <div class="ontext"> 
                <h5>Most Popular Product</h5>
                <p>The product that been recently trentding would not be dissopointed.</p>
                <div class="bun">shop now</div>
            </div>
        </div>
    </div>
</template>



<style scoped>
.swiper{
    margin-top: 200px;
    border-radius: 30px;
    width: 1365px;
    height: 455px;
    overflow: hidden;
}
.block{
    position: relative;
    width: 1365px;
    height: 455px;
}
.block img{
    width: 100%;
    height: 100%
}
.overtext{
        position: relative;
        width: 100%;
        height: 100px;
    }
    .ontext{
        z-index: 1000;
        position: absolute;
        top: -280px;
        left: 300px;
        width: 400px;
        height: 100px;
    }
    .ontext h5 {
    color: white;
    font-weight: 700;
    }
    .ontext p {
    color: white;
    }
    .bun{
        text-align: center;
        border-radius: 10px;
        padding-top: 3px;
        width: 80px;
        height: 35px;
        background-color: goldenrod;
        color: white;
        transition: 0.3s;
        cursor: pointer;
    }
    .bun:hover{
        transition: 0.3s;
        transform: scale(1.1);
    }
</style>