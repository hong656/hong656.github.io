<template>
    <div class="line-product">
     <div class="product" id="show" v-for="(el,indx) in productList" :key="indx" >
         <div class="pro-top">
             <div class="small-cart">
                 <i class="fa-solid fa-cart-shopping"></i>
             </div>
             <div class="small-eye" id="pop-up" @click="showPopup">
                 <i class="fa-solid fa-eye"></i>
             </div>
             <img :src="'../src/assets/product-pic/' + el.image_name">
         </div>
         <div class="pro-bottom">
             <div class="letter"><p>{{ el.category_id }}</p></div>
             <div class="letter"><h6>{{ el.title }}</h6></div>
             <div class="letter"><p>${{ el.price }}</p></div>
         </div>
     </div>
    </div>
    <div class="popup" v-if="isPopupVisible">
      <div class="popup-content">
        <div class="exit" @click="hidePopup"><i class="fa-solid fa-xmark"></i></div>
        <!-- Add more details or dynamic content here -->
        <div class="popup-details">
          <div class="popup-left">

          </div>
          <div class="popup-right">

          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            isPopupVisible: false,
            productList: [],
            errorMessages: ""
        }
    },

    mounted() {
        axios
        .get("http://localhost:5283/Products/list")
        .then((res) => {
            if (res.status == 200) {
            var data = res.data;
            for (var i = data.length - 1; i >= 0; i--) {
                this.productList.push(data[i]);
            }
            }
        })
        .catch((err) => {
            this.errorMessages = "cannot read data: " + err;
        });
    },
    methods: {
    showPopup() {
      this.isPopupVisible = true;
      document.body.style.overflow = 'hidden'; // Disable scrolling
    },
    hidePopup() {
      this.isPopupVisible = false;
      document.body.style.overflow = ''; // Enable scrolling
    }
  }
}
</script>


<style scoped>
.line-product{
    flex-wrap: wrap;
}
.product{
    height: 390px;
    margin-bottom: 50px;
}
.line-product{
    margin: auto;
    width: 80%;
    margin-bottom: 100px;
    display: flex;
    justify-content: left;
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
.popup {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
}
.popup-content {
    background-color: white;
    padding: 20px;
    position: relative;
    width: 900px;
    height: 500px;
    overflow-y: auto;
    box-shadow: 0 5px 15px rgba(0,0,0,.5);
}
.exit {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
}
.exit i {
    font-size: 20px;
}
.popup-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
}
.popup-details img {
    max-width: 100%;
    height: auto;
}
.popup-left{
    background-color: aqua;
    width: 300px;
    height: 350px;
}
.popup-right{
    background-color: blueviolet;
    width: 560px;
    height: 450px;
}
</style>