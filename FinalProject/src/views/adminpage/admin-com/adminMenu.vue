<template>
    <div class="left-menu">
        <div class="logo">
            <img src="/src/assets/pic/logo1.png" alt="">
            <h3>MUUTOS</h3>
        </div>
        <ul class="list" type="none">
            <router-link to="/admin/user"><li class="text-list"><i class="fa-solid fa-user-plus"></i>Create User</li></router-link>
            <router-link to="/admin/user/Updateuser"><li class="text-list"><i class="fa-solid fa-user-gear"></i>Update User</li></router-link> 
            <router-link to="/admin/user/listuser"> <li class="text-list"><i class="fa-solid fa-address-book"></i>List User</li></router-link>
            <li class="sheild"><h4>Product</h4></li>
            <router-link to="/admin/user/upload"> <li class="text-list"><i class="fa-solid fa-file-arrow-up"></i>Upload File</li></router-link>
            <router-link to="/admin/user/product"> <li class="text-list"><i class="fa-solid fa-cart-plus"></i>Create Product</li></router-link>
            <router-link to="/admin/user/updateproduct"> <li class="text-list"><i class="fa-solid fa-wrench"></i>Update Product</li></router-link>
            <router-link to="/admin/user/listproduct"> <li class="text-list"><i class="fa-solid fa-clipboard-list"></i>List Product</li></router-link>

        </ul>
        <button @click="logoutHandler">Log Out</button>
    </div>
</template>


<style scoped>
.left-menu{
    width: 300px;
    height: 100vh;
    padding: 10px 20px 10px 20px;
    border-right: 1px solid black;
    background-color: #169999;
}
.logo{
    display: flex;
}
.logo h3{
    color: white;
}
.logo img{
    width: 40px;
    height: 40px;
}
/* --------------list */
.list{
    margin-top: 20px;
}
.text-list{
    margin-top: 10px;
    width: 200px;
    height: 35px;
    padding-left: 10px;
    padding-top: 5px;
    background-color: #3ba67d;
    color: white;
    font-size: 17px;
    border-radius: 10px;
    border: 1px solid #353535;
    cursor: pointer;
    transform: 0.2s;
}
.text-list:hover{
    border: 2px solid red;
    transform: 0.2s;
}
.text-list i{
    font-size: 20px;
    margin-right: 10px;
}
.left-menu button{
    width: 80px;
    margin-left: 90px;
    background-color: #3ba67d;
}
.sheild{
    margin-top: 20px;
    width: 100%;
    padding-left: 60px;
}
.sheild h4{
    color: white;
}

.left-menu button{
    border-radius: 10px;
    height: 35px;
    background-color: red;
    color: white;
    transition: 0.3s;
}
.left-menu button:hover{
    transform: scale(1.1);
    transition: 0.3s;
}
</style>

<script>
    export default {
  methods: {
    logoutHandler() {
      localStorage.removeItem('isLogin')
      this.$router.push('/admin/login')
    }
  }
}
</script>