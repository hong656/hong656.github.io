<template>
    <div>
        <input type="text" v-model="name">
        <input type="text" v-model="price">
        <input type="text" v-model="category">
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return{
            name: '',
            price: '',
            category: '',
            message: ''
        }
    },
    mounted() {
        var req = {
            name_i : this.name,
            price_i : this.price,
            category_i : this.category
        }
        axios
        .post('/http/home/',req)
        .then((res)=>{
            if(res.status == 200){
                
                this.name= ''
                this.price= ''
                this.category= ''
            }
            else{
                this.message = "asdahdasgdjsadj"
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
</script>

