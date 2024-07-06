<template>
    <div class="swip">        
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
        /* color: #169999; */
    }
    .swip{
        background-image: url(../assets/pic/swip.png);
        z-index: -1;
        width: 100%;
        height: 550px;
        position: relative;
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
</style>