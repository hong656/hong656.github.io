<template>
    <div class="left-menu">
        <div class="logo">
            <img src="/src/assets/pic/logo1.png" alt="">
            <RouterLink to="/"><h3>MUUTOS</h3></RouterLink>
        </div>
        <ul class="list" type="none">
            <li class="text-list"><i class="fa-solid fa-user-plus"></i>Create User</li>
            <li class="text-list"><i class="fa-solid fa-user-gear"></i>Update User</li>
            <li class="text-list"><i class="fa-solid fa-user-minus"></i>Delete User</li>
        </ul>
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
</style>