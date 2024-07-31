<template>
    <div class="swip">
        <img :src="slides[slideIndex]" alt="Slide Image">        
        <div class="in">
            <h5>The Highest Quality Of Material Could Be Found In Any Of Our Product.</h5>
            <button type="button" class="btn btn-warning">Best of Best</button>
        </div>
    </div>
</template>


<style scoped>
    .in .btn-warning{
        color: white;
    } 
    .swip h5{
        color: white;
    }
    .swip{
        z-index: -1;
        width: 100%;
        height: 550px;
        overflow: hidden;
        position: relative;
    }
    .swip .slide{
        display: none;
    }
    .swip .btn-warning{
        float: left;
    }
    .swip .in{
        top: 150px;
        left: 260px;
        position: absolute;
        width: 300px;
        height: 100px;
    }
    .displaySlide {
        display: block;
        width: 500px;
        height: 550px;

    }
</style>

<script>
import swipImage from '../assets/pic/login1.jpg';
import login1Image from '../assets/pic/dark.jpg';
import darkLuxuryImage from '../assets/pic/dark-luxury.jpg';

export default {
    data() {
        return {
            slides: [swipImage, login1Image, darkLuxuryImage],
            slideIndex: 0,
            interValID: null
        };
    },
    mounted() {
        this.initializeSlider();
    },
    methods: {
        initializeSlider() {
            if (this.slides.length > 0) {
                this.$nextTick(() => {
                    this.showSlide(this.slideIndex);
                    this.interValID = setInterval(this.nextSlide, 5000); // Change slide every 10 seconds
                });
            }
        },
        showSlide(index) {
            this.slideIndex = index;
        },
        nextSlide() {
            this.slideIndex = (this.slideIndex + 1) % this.slides.length; // Loop through slides
        }
    },
    beforeUnmount() { // Correct lifecycle hook for Vue 3
        if (this.interValID) {
            clearInterval(this.interValID); // Clear interval to prevent memory leaks
        }
    }
};

</script>