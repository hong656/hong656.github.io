<template>
    <div class="all-chair">
        <div class="chair-line">
        <div class="chair" style="padding-top: 50px;">
            <h1>Crafted with excellent material.</h1>
            <p style="margin-top: 30px;margin-bottom: 30px;">
                Beat the heat and back pain with the revolutionary comfort of breathable mesh! Unlike traditional chairs that trap heat and cause discomfort, mesh chairs offer unparalleled airflow. Imagine sitting for hours and feeling cool.</p>
            <div class="ex" style="border: 0;background-color: black;margin-left: 10px"><h6>Explore</h6></div>
        </div>
        <div class="chair" style="display: flex;justify-content: center;align-items: center;">
            <div class="chair-mid">
                <div class="plus"><i class="fa-solid fa-circle-plus"></i></div>
            </div>
            <div class="chair-pic">
                <img src="../assets/pic/chair-1.png" alt="">
            </div>
            <div class="chair-price">
                <h6>Chair</h6>
                <h6>$30.00</h6>
            </div>
        </div>
        <div class="chair" style="display: flex;justify-content: center;align-items: center;">
            <div class="chair-mid">
                <div class="plus"><i class="fa-solid fa-circle-plus"></i></div>
            </div>
            <div class="chair-pic">
                <img src="../assets/pic/chair-2.png" alt="">
            </div>
            <div class="chair-price">
                <h6>Chair</h6>
                <h6>$30.00</h6>
            </div>
        </div>
        <div class="chair" style="display: flex;justify-content: center;align-items: center;">
            <div class="chair-mid">
                <div class="plus"><i class="fa-solid fa-circle-plus"></i></div>
            </div>
            <div class="chair-pic">
                <img src="../assets/pic/chair-3.png" alt="">
            </div>
            <div class="chair-price">
                <h6>Chair</h6>
                <h6>$30.00</h6>
            </div>
        </div>
        <div class="chair" style="display: flex;justify-content: center;align-items: center;">
            <div class="chair-mid">
                <div class="plus"><i class="fa-solid fa-circle-plus"></i></div>
            </div>
            <div class="chair-pic">
                <img src="../assets/pic/chair-3.png" alt="">
            </div>
            <div class="chair-price">
                <h6>Chair</h6>
                <h6>$30.00</h6>
            </div>
        </div>
        <div class="chair" style="display: flex;justify-content: center;align-items: center;">
            <div class="chair-mid">
                <div class="plus"><i class="fa-solid fa-circle-plus"></i></div>
            </div>
            <div class="chair-pic">
                <img src="../assets/pic/chair-3.png" alt="">
            </div>
            <div class="chair-price">
                <h6>Chair</h6>
                <h6>$30.00</h6>
            </div>
        </div>
        <div class="chair" style="display: flex;justify-content: center;align-items: center;">
            <div class="chair-mid">
                <div class="plus"><i class="fa-solid fa-circle-plus"></i></div>
            </div>
            <div class="chair-pic">
                <img src="../assets/pic/chair-3.png" alt="">
            </div>
            <div class="chair-price">
                <h6>Chair</h6>
                <h6>$30.00</h6>
            </div>
        </div>
    </div>
</div>
</template>


<style scoped>
    .ex{
        cursor: pointer;
        transition: 0.3s;
        width: 100px;
        height: 50px;
        border-radius: 30px;
        padding-top: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        border: 1px solid white;
    }
    .all-chair::-webkit-scrollbar{
        display: none;
    }
    .all-chair{
        margin: auto;
        width: 90%;
        overflow: hidden;
        overflow-x: scroll;
    }
    .chair-line{
    margin: auto;
    margin-top: 60px;
    margin-bottom: 50px;
    width: 2700px;
    height: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    }
    .chair{
        position: relative;
        width: 345px;
        height: 100%;
    }
    .chair:hover .chair-mid{
        transform: scale(1.1);
        transition: 0.3s;
        visibility: visible;
    }
    .chair:hover .plus{
        transition: 0.3s;
        cursor: pointer;
        visibility: visible;
    }
    .chair h1{
        font-size: 50px;
        font-weight: 700;
    }
    .chair .ex:hover{
        transform: scale(1.1);
        transition: 0.3s;
    }
    .chair-mid{
        transition: 0.3s;
        margin-top: 130px;
        width: 100%;
        height: 70%;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        visibility: hidden;
        background-color: #3161613a;
    }
    .chair-pic{
        position: absolute;
        top: 50px;
        margin: auto;
        width: 90%;
        height: 350px;
    }
    .chair-pic img{
        width: 100%;
        height: 100%;
    }
    .chair-price{
        position: absolute;
        text-align: center;
        bottom: 50px;
        width: 100%;
        height: 50px;
    }
    .plus{
        transition: 0.3s;
        visibility: hidden;
        width: 30px;
        height: 30px;
        border-radius: 100%;
        margin-bottom: -350px;
        font-size: 28px;
        transition: 0.2s;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .plus:hover{
        transition: 0.2s;
        transform: scale(1.1);
        cursor: pointer;
    }
</style>