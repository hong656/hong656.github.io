<template>
    <div class="headerbot">
        <div class="left">
            <div class="v">
                <img src="../assets/pic/V.jpg">
            </div>
        </div>
        <div class="mid">
            <ul type="none">
                <li><p>Chair</p></li>
                <li><p>Table</p></li>
                <li><p>Clock</p></li>
                <li><p>Flower-Pot</p></li>
                <li><p>Bed</p></li>
                <li><p>Coarch</p></li>
            </ul>
        </div>
        <div class="right">
            <div class="search">
                <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping"><i class="fa-solid fa-magnifying-glass"></i></span>
                    <input type="text" class="form-control" placeholder="Search">
                </div>
            </div>
            <div class="e">
                <i class="fa-regular fa-heart"></i>
            </div>
            <div class="e">
                <i class="fa-solid fa-bag-shopping"></i>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .mid p{
        font-weight: 600;
    }
    ul{
        width: 450px;
        display: flex;
        justify-content: space-between;
    }
    .e{
        cursor: pointer;
    }
    .headerbot{
        margin: auto;
        width: 90%;
        height: 60px;
        display: flex;
        justify-content: space-between;
    }
    .headerbot .left{
        width: 230px;
        height: 100%;
        padding-top: 15px;
    }
    .v{
        width: 40px;
        height: 30px;
    }
    .v img{
        width: 100%;
        height: 100%;
    }
    .headerbot .mid{
        padding-top: 18px;
        padding-left: 35px;
        width: 500px;
        height: 100%;
    }
    .headerbot .right{
        display: flex;
        justify-content: space-between;
        width: 350px;
        height: 100%;
    }
    .search{
        margin-top: 12px;
        width: 280px;
        height: 30px;
    }
    .e{
        margin-top: 13px;
        text-align: center;
        width: 30px;
        height: 30px;
        font-size: 25px;
    }
    
</style>