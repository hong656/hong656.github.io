<template>
       <div class="line-product">
        <div class="product">
            <div class="pro-top">
                <div class="small-cart">
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
                <div class="small-eye" @click="showPopup">
                    <i class="fa-solid fa-eye"></i>
                </div>
                <img src="../assets/pic/living-room-brown-sofa-400x400.png" alt="">
            </div>
            <div class="pro-bottom">
                <div class="letter"><p>Living Room</p></div>
                <div class="letter"><h6>Brown Living Room Sofa</h6></div>
                <div class="letter"><p>$1200.00</p></div>
            </div>
        </div>
        <div class="product">
            <div class="pro-top">
                <div class="small-cart">
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
                <div class="small-eye" id="pop-up">
                    <i class="fa-solid fa-eye"></i>
                </div>
                <img src="../assets/pic/egyptian-brown-vase-400x400.png" alt="">
            </div>
            <div class="pro-bottom">
                <div class="letter"><p>Living Room</p></div>
                <div class="letter"><h6>Egyptian Brown Vase</h6></div>
                <div class="letter"><p>$400.00</p></div>
            </div>
        </div>
        <div class="product">
            <div class="pro-top">
                <div class="small-cart">
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
                <div class="small-eye" id="pop-up">
                    <i class="fa-solid fa-eye"></i>
                </div>
                <img src="../assets/pic/furniture-green-fabric-chair.png" alt="">
            </div>
            <div class="pro-bottom">
                <div class="letter"><p>Living Room</p></div>
                <div class="letter"><h6>Modern Emerald Fabric Chair</h6></div>
                <div class="letter"><p>$860.00</p></div>
            </div>
        </div>
        <div class="product">
            <div class="pro-top">
                <div class="small-cart">
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
                <div class="small-eye" id="pop-up">
                    <i class="fa-solid fa-eye"></i>
                </div>
                <img src="../assets/pic/living-room-green-sofa-400x400.png" alt="">
            </div>
            <div class="pro-bottom">
                <div class="letter"><p>Living Room</p></div>
                <div class="letter"><h6>Green Living Room Sofa</h6></div>
                <div class="letter"><p>$1800.00</p></div>
            </div>
        </div>
     </div>
     <div class="popup" v-show="popupVisible">
        <div class="popup-content">
            <div class="exit" @click="hidePopup"><i class="fa-solid fa-xmark"></i></div>
        </div>
     </div>
</template>


<script>
    export default {
    data() {
        return {
            popupVisible: false,
            selectedProduct: null
        };
    },
    methods: {
        showPopup() {
            this.popupVisible = true;
        },
        hidePopup() {
            this.popupVisible = false;
            this.selectedProduct = null;
        }
    }
}
</script>

<style>
    /* ---------------------------product */
    .line-product{
        margin: auto;
        width: 80%;
        height: 390px;
        margin-bottom: 100px;
        display: flex;
        justify-content: space-between;
    }
    .product{
        transition: 0.3s;
        width: 300px;
        height: 100%;
    }
    .pro-top{
        position: relative;
        width: 100%;
        height: 300px;
    }
    .pro-top img{
        width: 100%;
        height: 100%;
    }
    .small-cart{
        position: absolute;
        visibility: hidden;
        padding-top: 2px;
        width: 30px;
        height: 30px;
        box-shadow: 0px 1px 5px 0px;
        right: 15px;
        top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
    }
    .small-eye{
        position: absolute;
        visibility: hidden;
        padding-top: 2px;
        width: 30px;
        height: 30px;
        box-shadow: 0px 1px 5px 0px;
        right: 15px;
        top: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
    }
    .pro-bottom{
        text-align: center;
        width: 100%;
    }
    .pro-bottom .letter{
        height: 25px;
    }
    .pro-bottom h6{
        color: #BC9127;
    }
    .product:hover{
        transition: 0.3s;
        box-shadow: 0px 4px 15px 0px;
        cursor: pointer;
    }
    .product:hover .small-cart{
        visibility: visible;
    }
    .small-cart:hover{
        transition: 0.2s;
        transform: scale(1.1);
    }
    .product:hover .small-eye{
        visibility: visible;
    }
    .small-eye:hover{
        transition: 0.2s;
        transform: scale(1.1);
    }
    /* -------------------------popup */
    .popup{
    display: none; /* Initially hidden */
    position: fixed; /* Fixed position to ensure it stays in place */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    z-index: 1000; /* Ensure it is above other content */
}
.popup[style*="display: block;"] {
    display: block !important;
}
.popup-content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Center the popup */
    background-color: white;
    width: 1000px;
    height: 500px;
}

.exit{
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    top: -10px;
    right: -10px;
    cursor: pointer;
    background-color: black;
}
.exit i{
    text-align: center;
    color: white;
    margin-left: 7px;
}
</style>


