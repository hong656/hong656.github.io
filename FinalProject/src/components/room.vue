<template>
        <div class="line-option">
        <div class="room" id="room1">
            <div class="darker"></div>
            <h3>Living Room<i class="fa-solid fa-arrow-right"></i></h3>
        </div>
        <div class="room" id="room2">
            <div class="darker"></div>
            <h3>BedRoom<i class="fa-solid fa-arrow-right"></i></h3>
        </div>
        <div class="room" id="room3">
            <div class="darker"></div>
            <h3>Ketchen<i class="fa-solid fa-arrow-right"></i></h3>
        </div>
        <div class="room" id="room4">
            <div class="darker"></div>
            <h3>Bathroom<i class="fa-solid fa-arrow-right"></i></h3>
        </div>
    </div>
</template>


<style>
    .line-option{
    width: 100%;
    height: 490px;
    display: flex;
    margin-bottom: 50px;
    }
    .room{
        position: relative;
        width: 25%;
        height: 100%;
        background-size: 100%;
    }
    .darker{
        visibility: hidden;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
    }
    .room h3{
        transition: 0.3s;
        font-weight: 700;
        color: white;
        position: absolute;
        bottom: 10px;
        left: 40px;
    }
    .room:hover .darker{
        visibility: visible;
    }
    .room h3:hover{
        cursor: pointer;
        transition: 0.3s;
        color: #BC9127;
    }
    #room1{
        background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(../assets/pic/living-room-option.jpg)
    }
    #room2{
        background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(../assets/pic/bedroom-option.jpg)
    }
    #room3{
        background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(../assets/pic/ketchen-option.jpg)
    }
    #room4{
        background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(../assets/pic/bath-room-option.jpg)
    }
</style>