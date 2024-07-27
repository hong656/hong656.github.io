<template>
    <div class="line-product">
     <div class="product" id="show" v-for="(el,indx) in productList" :key="indx" >
         <div class="pro-top">
             <div class="small-cart">
                 <i class="fa-solid fa-cart-shopping"></i>
             </div>
             <div class="small-eye" id="pop-up">
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
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
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
            var count = 0;
            for (var el in data) {
            if (count >= 8) {
                break;
            }
            this.productList.push(data[el]);
            count++;
            }
        }
        })
        .catch((err) => {
        this.errorMessages = "cannot read data: " + err;
        });
    }
}    
</script>


<style scoped>
.line-product{
    flex-wrap: wrap;
    margin-bottom: 50px;
}
.product{
    height: 390px;
    margin-bottom: 50px;
}
</style>